import { Typography, Box, } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, SectionDivider, Paragraph } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Supersonic Contra Dance<br />
        2024 February 2&ndash;4<br />
        Seattle
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        We are a zesty, high-energy dance weekend for experienced dancers.<br />
        We will be using Larks and Robins.
      </Typography>
      <Typography variant="h6">
        Music by <StyledLink internal={true} to="/staff#FineCompanions">This Awesome Band and That Amazing Band</StyledLink>
      </Typography>
      <Typography variant="h6">
        Calling by <StyledLink internal={true} to="/staff#FineCompanions">Seth Tepfer and Will Mentor</StyledLink>
      </Typography>
      <Typography variant="h6">
        <p>Sound engineer <StyledLink internal={true} to="/staff#JohnOorthuys">Someone Awesome</StyledLink></p>
      </Typography>

      <Paragraph sx={{ my: 4 }}>
        Supersonic will follow the COVID & Mask Policies of the Seattle Emerald City and Lake City Contra Dances.
      </Paragraph>

      <Typography variant="h6">
        Registration: $120-300 sliding scale ($180 break-even)
      </Typography>

      <Typography variant="h6" sx={{mt: 2}}>
        The venue is the Leif Erikson Hall in Ballard. 
      </Typography>

      <SectionDivider/>

      <Typography variant="h6">
        Pre-Ball <StyledLink internal={true} to="/workshops">workshops</StyledLink>:
      </Typography>
      <Paragraph sx={{ mt: 1 }}>
        <strong>3-5pm on Sept 24, Oct 15, and Oct 29</strong><br />
        <StyledLink to="https://www.renpdx.org/">A Renaissance School</StyledLink><br />
        <StyledLink to="https://goo.gl/maps/M2CBrKV3KKJkuTb8A">234 S Bancroft St, Portland, OR 97239</StyledLink>
      </Paragraph>

      <SectionDivider/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
      <StyledLink internal={true} to="/registration">Registration Open</StyledLink>
      </Typography>
    </StyledPaper>
  );
}
