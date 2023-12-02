import { useState } from 'react';
import Reaptcha from 'reaptcha';
import { CAPTCHA_KEY } from 'config';
import { Typography, Box, Button } from '@mui/material';

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
          <Typography sx={{ mt: 2 }}>
            Make your check out to Supersonic Contra Dance Weekend.<br />
            Write your name in the memo area, and mail to:
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Karen Marshall<br />
            Supersonic Contra Dance Weekend<br />
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
