import { useEffect } from 'react';
import { EMAIL_CONTACT } from 'config';
import { mailtoLink, scrollToTop } from 'utils';
import OrderSummary from 'components/OrderSummary';
import { StyledLink } from 'components/Layout/SharedStyles';
import { Divider, Typography } from '@mui/material';

export default function Receipt({ order }) {
  useEffect(() => { scrollToTop() },[]);
  return(
    <>
      <p>Thanks, {order.people[0].first}!</p>
      {order.electronicPaymentId === 'check' ? <CheckReceipt order={order}/> : <PaypalReceipt order={order }/>}
    </>
  );
}

function CheckReceipt({ order }) {
  return (
    <>
      <Typography component='p' color='error'>
        <strong>Your registration is not yet complete!</strong><br />
        Please send a check for ${order.total} to secure your spot.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Make your check out to Supersonic Contra Dance Weekend, write your name in the memo area, and mail to:
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Supersonic Contra Dance Weekend<br />
        PO Box 1173<br />
        Anacortes, WA 98221
      </Typography>

      <SharedReceipt />
      
      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>
      <Typography component='p' variant="h6" gutterBottom={true}>Registration Information:</Typography>
      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

function PaypalReceipt({ order }) {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        We're excited to have you attend this year's Supersonic. 
        Your payment for ${order.total} has been successfully processed. 
      </Typography>

      <SharedReceipt />

      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>
      <Typography component='p' variant="h6" gutterBottom={true}>Registration Information:</Typography>
      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

export function AdditionalPersonReceipt({ order }) {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        We're excited to have you attend this year's Supersonic. 
      </Typography>

      <SharedReceipt />
    </>
  )
}

export function SharedReceipt() {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        Supersonic will follow masking policies of the Seattle Emerald City and Lake City contra dances.<br />
        As of November, this means well-fitted masks are required.<br />
        Vaccination encouraged but not required.<br />
        Please do not attend if you are feeling sick.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Please respect other dancers by using fragrance-free toiletries.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        If you are able to volunteer, please contact <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Questions:  Contact Karen at <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.
      </Typography>
    </>
  );
}
