import { Typography, Box, } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, SectionDivider, Paragraph } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Supersonic Contra Dance<br />
        Leif Erikson Hall, Seattle<br />
        2024 February 2 - 4
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/supersonic/dancer.jpg'} alt='' style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        We are a zesty, high-energy dance weekend for experienced dancers.<br />
        
      </Typography>

      <Paragraph sx={{ mb: 2 }}>
        Supersonic will follow Covid & mask policies of the<br />
        Seattle Emerald City and Lake City contra dances.
      </Paragraph>

      <Paragraph>
        Music by <StyledLink internal={true} to="/staff#band1">Notorious</StyledLink> and <StyledLink internal={true} to="/staff#band2">Playing with Fyre</StyledLink>
      </Paragraph>

      <Paragraph>
        Calling by <StyledLink internal={true} to="/staff#caller1">Seth Tepfer</StyledLink> and <StyledLink internal={true} to="/staff#caller2">Will Mentor</StyledLink><br />
        Role terms will be Larks and Robins.
      </Paragraph>

      <Paragraph>
        Sound engineer <StyledLink internal={true} to="/staff#sound">Someone Awesome</StyledLink>
      </Paragraph>

      <Paragraph>
        Registration: $120-300 sliding scale ($180 break-even)
      </Paragraph>

      <SectionDivider/>

      <Paragraph>
        We will be dancing primarily complex contras with limited or no walkthroughs.<br />
        Many participants easily dance both roles and role switching is common.
      </Paragraph>

      <Paragraph>
        Supersonic Contra Dance Weekend gives experienced dancers the opportunity to explore ways in which to challenge themselves and improve their skills as dance partners while experiencing complex dances and immense joy.
      </Paragraph>

      <Paragraph>
        We begin the weekend with no walkthrough contra corners. Are you comfortable navigating complex dances often with no walkthroughs or hash calls? Do you recover quickly from mistakes? If you answered yes, this weekend is for you.
      </Paragraph>

      <SectionDivider/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
      {/* <StyledLink internal={true} to="/registration">Registration open</StyledLink> */}
      Registration opening in early November
      </Typography>
    </StyledPaper>
  );
}
