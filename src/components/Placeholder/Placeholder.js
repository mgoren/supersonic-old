import { Typography, Box, } from '@mui/material';
import { StyledPaper, PageTitle, Paragraph } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Supersonic Contra Dance<br />
        Leif Erikson Hall, Seattle<br />
        <hr />
        2025 February 7 - 9
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/supersonic/dancer.jpg'} alt='' style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        We are a zesty, high-energy dance weekend for experienced dancers.<br />
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Music by Gallimaufry & Joyride<br />
        Calling by Seth Tepfer & Cis Hinkle
      </Typography>

      <Paragraph>
        More info coming soon...
      </Paragraph>
    </StyledPaper>
  );
}
