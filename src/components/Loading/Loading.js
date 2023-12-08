import { TailSpin } from 'react-loading-icons'
import { Box, Typography } from '@mui/material';

export default function Loading({ text, secondaryText=null, isHeading=true}) {
  return (
    <Box align='center' sx={{ my: 10 }}>
      <TailSpin stroke='black' strokeWidth='2.5' />
      <Typography sx={{ mt: 5}} color={isHeading ? 'error' : 'secondary'}>
        {text}
      </Typography>
      {secondaryText &&
        <Typography sx={{ mt: 2 }} color='secondary'>
          {secondaryText}
        </Typography>
      }
    </Box>
  );
}
