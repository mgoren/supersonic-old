import { useState, useEffect, useRef, useCallback } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Loading from 'components/Loading';
import { Box } from '@mui/material';
import StripeCheckoutForm from 'components/StripeCheckoutForm';

// ***************************************************************
const firebaseFunctionsBaseUrlProduction = "https://us-central1-supersonic-fc15a.cloudfunctions.net";
const firebaseFunctionsBaseUrlDevelopment = "http://localhost:5001/supersonic-fc15a/us-central1";
// ***************************************************************

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
const firebaseFunctionsBaseUrl = process.env.NODE_ENV === 'production' ? firebaseFunctionsBaseUrlProduction : firebaseFunctionsBaseUrlDevelopment;

export default function StripeCheckoutWrapper({ total, email, processing, setProcessing, setError, saveOrderToFirebase }) {
  const [clientSecret, setClientSecret] = useState(null);
  const clientSecretRef = useRef(null);

  const createPaymentIntent = useCallback(async () => {
    try {
      const response = await fetch(`${firebaseFunctionsBaseUrl}/createStripePaymentIntent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total, // amount in dollars
          email
        }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error(error);
    }
  }, [total, email]);
  
  const cancelPaymentIntent = async () => {
    const paymentIntentId = clientSecretRef.current.split('_secret_')[0];
    try {
      const response = await fetch(`${firebaseFunctionsBaseUrl}/cancelStripePaymentIntent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentIntentId
        }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    createPaymentIntent();
    return () => {
      console.log('leaving Stripe checkout page');
      if (clientSecretRef.current) {
        cancelPaymentIntent();
      }
    };
  }, [createPaymentIntent]);

  useEffect(() => {
    clientSecretRef.current = clientSecret;
  }, [clientSecret]);  

  let options = {
    clientSecret: clientSecret
  };
  
  return (
    <>
      {clientSecret ?
        <Elements stripe={stripePromise} options={options} key={clientSecret}>
          <StripeCheckoutForm
            setError={setError}
            processing={processing} setProcessing={setProcessing}
            clientSecretRef={clientSecretRef}
            saveOrderToFirebase={saveOrderToFirebase}
          />
        </Elements>
      :
        <Box align='center'>
					<Loading isHeading={false} text='Loading payment options...' />
				</Box>
      }
    </>
  );
}