import { useState } from 'react';
import Reaptcha from 'reaptcha';
import { CAPTCHA_KEY, PAYPAL_ME_URL } from 'config';
import { websiteLink } from 'utils';
import { Typography, Box, Button } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';

export default function Check({ saveOrderToFirebase, processing, setProcessing }) {
  const [verified, setVerified] = useState(false);

  const handleRegister = async () => {
    setProcessing(true);
    saveOrderToFirebase('check');
  }

  return (
    <section>
      {!processing &&
        <>
          <Typography sx={{ mt: 2 }}>Make your check out to Karen Marshall, write your name in the memo area, and mail to:</Typography>
          <Typography sx={{ mt: 2 }}>
            Karen Marshall<br />
            PO Box 1173<br />
            Anacortes, WA 98221
          </Typography>

          <Box sx={{ my: 3 }}>
            <Reaptcha
              sitekey={CAPTCHA_KEY}
              onVerify={() => setVerified(true)}
              onExpire={() => setVerified(false)}
            />
          </Box>

          <Button variant='contained' color='success' disabled={!verified} onClick={handleRegister} sx={{ mb: 2 }}>
            Register and agree to send a check
          </Button>
        </>
      }
    </section>
  );
}
