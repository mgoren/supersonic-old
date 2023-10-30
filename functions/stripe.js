// ***************************************************************
const frontendSiteDomain = "https://registration.pdxcontra.org";
// ***************************************************************

const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret_key);
const cors = require('cors');
const allowedOrigin = process.env.FUNCTIONS_EMULATOR ? "http://localhost:3000" : frontendSiteDomain;

exports.createStripePaymentIntent = functions.https.onRequest((req, res) => {
  cors({ origin: allowedOrigin })(req, res, async () => {
    if (req.method === "POST") {
      const { amount, name, email } = req.body;

      let customer;
      const existingCustomers = await stripe.customers.list({ email, limit: 1 });
      if (existingCustomers.data.length) {
        customer = existingCustomers.data[0].id;
      } else {
        const newCustomer = await stripe.customers.create({ name, email });
        customer = newCustomer.id;
      }

      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount * 100, // amount in cents
          currency: "usd",
          customer
        });
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
      } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
      }

    } else {
      res.set('Allow', 'POST');
      res.status(405).send('Method Not Allowed');
    }
  });
});

exports.cancelStripePaymentIntent = functions.https.onRequest((req, res) => {
  cors({ origin: allowedOrigin })(req, res, async () => {
    if (req.method === "POST") {
      const { paymentIntentId } = req.body;
      try {
        const paymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);
        res.status(200).json({ paymentIntent });
      } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
      }
    } else {
      res.set('Allow', 'POST');
      res.status(405).send('Method Not Allowed');
    }
  });
});
