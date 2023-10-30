# Configuration

**Stripe configuration**
- On Stripe console, disable all payment methods except Cards, Apple Pay, Google Pay
- Use test keys until ready to launch

**Also see README files inside the functions folder!**

**Setup Firebase:**
- Create firebase project and add to app, including firebase hosting
- Fill in firebaseConfig values in `.env` file (see `.env.example`)
- Create Firebase Realtime Database in test mode
- Fill in DB URL (likely includes `rtdb.firebaseio.com`) as _REACT_APP_FIREBASE_DATABASE_URL_ in `.env` file

**Setup Places API:**
- Activate both Places API and Maps Javascript API
- Create API key in Google cloud console with access to both those APIs, limit to `http://localhost:3000/*` and `https://www.[website].com/*`

**Setup Recaptcha:**
- Activate Recaptcha v2 not a robot checkbox and copy site key

**Development:**
Set environment variables in `.env`

**Production (with GitHub workflow and Firebase hosting):**
Set environment variables as [secrets](https://github.com/mgoren/registration/settings/secrets/actions) on the repo and update `.github/workflows/firebase-hosting-merge.yml`.

```
REACT_APP_PAYPAL_CLIENT_ID
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_DATABASE_URL
REACT_APP_RECAPTCHA_SITE_KEY
REACT_APP_GOOGLE_PLACES_API_KEY
```

# Deployment

**Via GitHub workflow:**
(See instructions above for configuring env variables as repo secrets.)

**Or:**

```sh
npm run build
firebase deploy --only hosting
```

# Registration site

Simple registration / admissions sales site for contra dance events.

Built in React.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
