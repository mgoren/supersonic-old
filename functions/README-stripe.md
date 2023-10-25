# Configuration

```
firebase init functions --project PROJECT_ID_OR_ALIAS
firebase functions:config:set stripe.secret_key="YOUR_STRIPE_SECRET_KEY"
```

not actually doing anything with this yet:
```
gcloud auth application-default login // create ADC for use with auth (https://cloud.google.com/docs/authentication/provide-credentials-adc#local-dev)
```

For testing:
```
firebase functions:config:get > .runtimeconfig.json // file must be in functions dir
firebase emulators:start --only functions
```

When ready to deploy:
```
firebase deploy --only functions
```
