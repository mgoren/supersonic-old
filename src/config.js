// if change form fields may also need to update OrderSummary and validationSchema

import * as Yup from 'yup';

export const SANDBOX_MODE = false; // for testing only

export const NUM_PAGES = 3;
export const STEPS = [
  {key: 1, label: 'Contact'},
  {key: 2, label: 'Misc'},
  {key: 3, label: 'Payment'},
  {key: 'checkout', label: 'Checkout'}
];

export const PAYMENT_METHODS = ['paypal', 'check']; // options are paypal and/or check (first is default)

export const TITLE = 'Supersonic 2024'
export const CONFIRMATION_PAYPAL_TITLE = 'Supersonic Confirmation';
export const CONFIRMATION_CHECK_TITLE = 'Supersonic Registration';
export const EMAIL_CONTACT = 'info@supersoniccontra.com';
export const DETAILS_URL = 'portlandcountrydance.org';
export const COVID_POLICY_URL = 'pcdc.fun/covid19';
export const CONTACT_TRACING_URL = 'pcdc.fun/contact-trace';
export const WAIVER_URL = 'pcdc.fun/files/PCDC_Events_Waiver.pdf';
export const PAYPAL_ME_URL = 'paypal.me/PortlandBall';

export const ADMISSION_COST_RANGE = [120, 300];
export const ADMISSION_COST_DEFAULT = 180;
export const ADMISSION_QUANTITY_RANGE = [1, 2];
export const DONATION_OPTION = true;
export const DONATION_RANGE = [0, 999];

const NAME_REGEX = "^[^<>&@]+$";
const PRONOUNS_REGEX = "^[^<>&@]+$";
const PHONE_REGEX = "^[2-9][0-9-() ]*$";
const NAME_VALIDATION = Yup.string().matches(NAME_REGEX, 'Invalid characters :(');
const PRONOUNS_VALIDATION = Yup.string().matches(PRONOUNS_REGEX, 'Invalid characters :(');
const EMAIL_VALIDATION = Yup.string().email('Invalid email address');
const PHONE_VALIDATION = Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.');
export const CAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
export const PAYPAL_OPTIONS = {
  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
  "disable-funding": "paylater,credit",
  // "enable-funding": "venmo",
  "currency": "USD",
  "locale": "en_US"
};


// this can include config for fields not used in this particular registration instance
export const FIELD_CONFIG = {
  first: {
    label: 'First name',
    validation: NAME_VALIDATION.required('Please enter first name.'),
    defaultValue: '',
    order: 1,
    width: 6,
    autoComplete: 'given-name'
  },
  last: {
    label: 'Last name',
    validation: NAME_VALIDATION.required('Please enter last name.'),
    defaultValue: '',
    order: 2,
    width: 6,
    autoComplete: 'family-name'
  },
  nametag: {
    label: 'Nametag',
    validation: NAME_VALIDATION,
    defaultValue: '',
    order: 3,
    width: 12
  },
  pronouns: {
    label: 'Pronouns for nametag',
    validation: PRONOUNS_VALIDATION,
    defaultValue: '',
    order: 4,
    width: 12
  },
  email: {
    label: 'Email',
    type: 'email',
    validation: EMAIL_VALIDATION.required('Please enter email address.'),
    defaultValue: '',
    order: 5,
    width: 12,
    autoComplete: 'email'
  },
  emailConfirmation: {
    label: 'Re-enter email',
    name: 'emailConfirmation',
    type: 'email',
    validation: EMAIL_VALIDATION.required('Please re-enter your email address.').oneOf([Yup.ref('people[0].email'), null], 'Email addresses must match.'),
    defaultValue: '',
    order: 6,
    width: 6,
    autoComplete: 'email'
  },
  phone: {
    label: 'Phone',
    type: 'tel',
    pattern: '###-###-####',
    placeholder: 'e.g. 555-555-5555',
    validation: PHONE_VALIDATION.required('Please enter phone number.'),
    defaultValue: '',
    order: 7,
    width: 12,
    autoComplete: 'tel'
  },
  address: {
    label: 'Street address',
    validation: Yup.string().required('Please enter street address.'),
    defaultValue: '',
    order: 8,
    width: 9,
    autoComplete: 'street-address'
  },
  apartment: {
    label: 'Apt, Suite, etc.',
    validation: Yup.string(),
    defaultValue: '',
    order: 9,
    width: 3,
    autoComplete: 'address-line2'
  },
  city: {
    label: 'City',
    validation: Yup.string().required('Please enter city.'),
    defaultValue: '',
    order: 10,
    width: 6,
    autoComplete: 'city'
  },
  state: {
    label: 'State / Province',
    validation: Yup.string().required('Please enter state or province.'),
    defaultValue: '',
    order: 11,
    width: 3,
    autoComplete: 'state'
  },
  zip: {
    label: 'Zip / Postal code',
    validation: Yup.string().required('Please enter zip/postal code.'),
    defaultValue: '',
    order: 12,
    width: 3,
    autoComplete: 'postal-code'
  },
  country: {
    label: 'Country',
    validation: Yup.string(),
    defaultValue: '',
    order: 13,
    width: 12,
    autoComplete: 'country',
    hidden: true
  },
}


// below is config for this particular registration instance

// order of FIRST_PERSON_FIELDS is used in emailConfirmationIsFirstInvalidField
const FIRST_PERSON_FIELDS = ['first', 'last', 'nametag', 'pronouns', 'email', 'emailConfirmation', 'phone', 'address', 'apartment', 'city', 'state', 'zip', 'country'];
const OTHER_PERSON_FIELDS = ['first', 'last', 'nametag', 'pronouns', 'email', 'phone', 'address', 'apartment', 'city', 'state', 'zip', 'country'];

export const PERSON_INPUTS = [
  { label: 'Your contact information', fields: FIRST_PERSON_FIELDS },
  { label: 'Second admission', fields: OTHER_PERSON_FIELDS },
  { label: 'Third admission', fields: OTHER_PERSON_FIELDS },
  { label: 'Fourth admission', fields: OTHER_PERSON_FIELDS },
];

export const ORDER_DEFAULTS = {
  people: PERSON_INPUTS.map((person, index) => ({
    ...person.fields.reduce((obj, field) => ({ ...obj, [field]: FIELD_CONFIG[field].defaultValue }), {}),
    index
  })),
  emailConfirmation: '', // because we're overriding this field name so is not part of the people array
  admissionCost: ADMISSION_COST_DEFAULT,
  admissionQuantity: ADMISSION_QUANTITY_RANGE[0],
  donation: DONATION_RANGE[0],
  volunteer: [],
  hospitality: [],
  scholarship: [],
  share: ['name', 'email', 'phone', 'location'],
  comments: '',
  workTrade: '',
}

export const VOLUNTEER_OPTIONS = [
  { label: 'Airport pick-up/drop-off', value: 'airport' },
  { label: 'Friday pre-ball dance', value: 'friday' },
  { label: 'Saturday pre-workshop decorating', value: 'saturday-pre' },
  { label: 'Saturday evening post-ball', value: 'saturday-post' },
  { label: 'Sunday Brunch setup and/or cleanup', value: 'sunday' },
];

export const HOSPITALITY_OPTIONS = [
  { label: 'I can offer housing', value: 'offering' },
  { label: 'I need housing (limited availability)', value: 'requesting' },
];

export const SCHOLARSHIP_OPTIONS = [
  { label: 'I am requesting a scholarship', value: 'yes' },
];

export const SHARE_OPTIONS = [
  { label: 'Include my name in the roster', value: 'name' },
  { label: 'Include my email in the roster', value: 'email' },
  { label: 'Include my phone number in the roster', value: 'phone' },
  { label: 'Include my city and state in the roster', value: 'location' },
]

export const DANCES = [
  "The Archer",
  "Bath Carnival",
  "Braye's Maggot",
  "Felix's Name Day*",
  "The Flighty Nymph",
  "Flora and Phaon",
  "Foxfire*",
  "Gleaners",
  "Graphite",
  "Ivy and a Rose",
  "Land of Mist and Wonder",
  "Master Barton's Arrival",
  "Midwinter Maggot",
  "Pine in the Path",
  "Set for Spring",
  "Way of the World",
  "Young Widow"
];
