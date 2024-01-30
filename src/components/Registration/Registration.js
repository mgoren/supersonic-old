import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import Header from 'components/Header';
import IntroHeader from 'components/Header/IntroHeader';
import OrderSummary from "components/OrderSummary";
import Receipt from "components/Receipt";
import { cache, cached } from 'utils';
import { PAYMENT_METHODS, PAYPAL_OPTIONS, ORDER_DEFAULTS, TITLE, CONFIRMATION_CHECK_TITLE, CONFIRMATION_PAYPAL_TITLE, SANDBOX_MODE } from "config";
import { Box, Typography } from "@mui/material";
import { StyledPaper } from 'components/Layout/SharedStyles';

export default function Registration({ waitlist = false }) {
  // const [registering, setRegistering] = useState(false);
  return (
    // registering ? <RealRegistration /> : <PreRegistration setRegistering={setRegistering} />
    waitlist ? <Waitlist /> : <RealRegistration />
  );
}

// const PreRegistration = ({ setRegistering }) => {
//   return(
//     <StyledPaper>
//       <PageTitle>Ways to Pay</PageTitle>

//       <Paragraph>
//         <strong>1. Pay as part of online registration</strong><br />
//         The preferred method of paying for the Ball is to pay electronically as part of the online registration process. 
//         You will be able to do this by credit card, debit card, or with PayPal. 
//         If you don't pay online at registration time, just use one of the other methods below.
//       </Paragraph>

//       <Paragraph>
//         <strong>2. Pay electronically at a later date via PayPal.Me</strong><br />
//           If you prefer to pay electronically at a later date, you can pay via PayPal.Me <StyledLink to={websiteLink(PAYPAL_ME_URL)}>here</StyledLink>. 
//           This requires you to have a PayPal account, but you can sign up for one on the spot. You can then pay by credit card, debit card, or your bank account. 
//           Please specify the registration amount and "Add a Note" to include your name. 
//       </Paragraph>

//       <Paragraph>
//         <strong>3. Write a paper check</strong><br />
//         <em>Make your check out to PCDC</em>, write your name in the memo area, and mail to:<br />
//         Portland ECD Ball<br />
//         David Macemon<br />
//         19936 Derby St<br />
//         West Linn, OR 97068
//       </Paragraph>
//     </StyledPaper>
//   );
// }

const RealRegistration = () => {
  const [order, setOrder] = useState(cached('order') || ORDER_DEFAULTS);
  const [currentPage, setCurrentPage] = useState(cached('currentPage') || 1);
  const [error, setError] = useState(null);
  const CONFIRMATION_TITLE = order.electronicPaymentId === 'check' ? CONFIRMATION_CHECK_TITLE : CONFIRMATION_PAYPAL_TITLE;

  // useEffect(() => { logBuildDate() }, []);
  useEffect(() => { cache('order', order) }, [order]);
  useEffect(() => { cache('currentPage', currentPage) }, [currentPage]);

  const content = (
    <>
      {SANDBOX_MODE &&
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem', backgroundColor: 'var(--color-error)' }}>
          TEST MODE ONLY - DO NOT USE FOR REAL REGISTRATION
        </Box>
      }

      {error && <Error error={error} />}

      <Header
        titleText={currentPage === 'confirmation' ? CONFIRMATION_TITLE : TITLE}
        currentPage={currentPage}
      >
        {currentPage === 1 && <IntroHeader />}
        {currentPage === 2 && <OrderSummary order={order} currentPage={currentPage} />}
        {currentPage === 3 && <OrderSummary order={order} currentPage={currentPage} />}
        {currentPage === 'checkout' && <OrderSummary order={order} currentPage={currentPage} />}
        {currentPage === 'confirmation' && <Receipt order={order} />}
      </Header>

      {isFinite(currentPage) &&
        <MainForm
          order={order} setOrder={setOrder}
          currentPage={currentPage} setCurrentPage={setCurrentPage}
        />
      }

      {currentPage === 'checkout' &&
        <Checkout
          order={order} setOrder={setOrder}
          setCurrentPage={setCurrentPage}
          setError={setError}
        />
      }

      {currentPage === 'confirmation' &&
        <Confirmation
          setOrder={setOrder}
          setCurrentPage={setCurrentPage}
        />
      }
    </>
  )

  return PAYMENT_METHODS.includes('paypal') ?
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      {content}
    </PayPalScriptProvider>
  : content;
}

const Waitlist = () => {
  return(
    <>
      <StyledPaper>
        {/* <Typography variant="h6" align='center'>Registration is closed, but you can sign up for the waitlist <StyledLink to="https://forms.gle/qG2BUBNgjRy3hvZn9">here</StyledLink>.</Typography> */}
        <Typography variant="h6" align='center'>Supersonic 2024 is full!</Typography>
      </StyledPaper>
    </>
  )
}