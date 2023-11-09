'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {google} = require('googleapis');
const SERVICE_ACCOUNT_KEYS = functions.config().googleapi.service_account;
const CONFIG_SHEET_ID = functions.config().googleapi.sheet_id;
const CONFIG_DATA_PATH = '/orders';

admin.initializeApp();

const client = new google.auth.JWT(
  SERVICE_ACCOUNT_KEYS.client_email,
  null,
  SERVICE_ACCOUNT_KEYS.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

// trigger function to write to Sheet when new data comes in on CONFIG_DATA_PATH
exports.appendrecordtospreadsheet = functions.database.ref(`${CONFIG_DATA_PATH}/{ITEM}`).onCreate(
  (snap) => {
    // console.log('in appendrecordtospreadsheet');
    const newRecord = snap.val();
    const createdAt = new Date(newRecord.timestamp).toLocaleDateString();
    const orders = splitOrder(newRecord);
    const promises = orders.map((order) => {
      const { first, last, pronouns, nametag, email, phone, address, apartment, city, state, zip, country, volunteer, hospitality, scholarship, share, comments, admissionQuantity, admissionCost, donation, total, deposit, owed, purchaser, electronicPaymentId } = order;
      // fields must be in the same order as the columns in the spreadsheet!
      const fields = {
        first,
        last,
        pronouns,
        nametag,
        email,
        phone,
        address: apartment ? `${address} ${apartment}` : address,
        city,
        state,
        zip,
        country,
        volunteer: volunteer?.join(', '),
        hospitality: hospitality?.join(', '),
        scholarship: scholarship?.join(', '),
        share: share?.join(', '),
        comments,
        admissionQuantity,
        admissionCost,
        donation,
        total,
        deposit,
        owed,
        purchaser,
        createdAt,
        electronicPaymentId
      };
      return appendPromise({
        spreadsheetId: CONFIG_SHEET_ID,
        range: 'A:X',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [Object.values(fields)]
        }
      });
    });
    return Promise.all(promises);
  });

// accepts an append request, returns a Promise to append it, enriching it with auth
function appendPromise(requestWithoutAuth) {
  // console.log('in appendPromise');
  return new Promise(async (resolve, reject) => {
    try {
      await client.authorize();
      const sheets = google.sheets({ version: 'v4', auth: client });
      const request = { ...requestWithoutAuth, auth: client };
      sheets.spreadsheets.values.append(request, (err, response) => {
        if (err) {
          functions.logger.log(`The API returned an error: ${err}`);
          return reject(err);
        }
        return resolve(response.data);
      });
    } catch (err) {
      functions.logger.log(`The API returned an error: ${err}`);
      return reject(err);
    }
  });
}

function splitOrder(order) {
  let orders = [];
  const { volunteer, hospitality, scholarship, share, comments, admissionQuantity, admissionCost, donation, total, deposit, electronicPaymentId } = order;
  const owed = total - deposit;
  const purchaser = fullName(order.people[0]);
  for (const person of order.people) {
    const {first, last, pronouns, nametag, email, phone, address, apartment, city, state, zip, country} = person;
    const personFields = {first, last, pronouns, nametag, email, phone, address, apartment, city, state, zip, country};
    const firstPersonFields = { ...personFields, volunteer, hospitality, scholarship, share, comments, admissionQuantity, admissionCost, donation, total, deposit, owed, purchaser, electronicPaymentId };
    const otherPersonFields = { ...personFields, purchaser };
    orders.push(person.index === 0 ? firstPersonFields : otherPersonFields);
  }
  return orders;
}

function fullName(person) {
  return `${person.first} ${person.last}`;
}
