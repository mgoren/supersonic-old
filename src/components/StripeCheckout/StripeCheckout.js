import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_eYIFKMW6VgMqFIsuxIFLEWYh');

export default function StripeCheckout() {
  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <>
      stripe checkout test
    </>
  );
}
