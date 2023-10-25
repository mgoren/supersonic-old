import { useState, useEffect } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Loading from 'components/Loading';
import { Box } from '@mui/material';
import StripeCheckoutForm from 'components/StripeCheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function StripeCheckoutWrapper({ total, saveOrderToFirebase }) {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetchClientSecret();
  }, []);
  
  const fetchClientSecret = async () => {
    try {
      const response = await fetch('http://localhost:5001/supersonic-fc15a/us-central1/getClientSecret');
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error(error);
    }
  };

  let options = {
    clientSecret: clientSecret
  };
  
  return (
    <>
      {clientSecret ?
        <Elements stripe={stripePromise} options={options} key={clientSecret}>
          <StripeCheckoutForm total={total} saveOrderToFirebase={saveOrderToFirebase} />
        </Elements>
      :
        <Box align='center'>
					<Loading isHeading={false} text='Loading payment options...' />
				</Box>
      }
    </>
  );
}
