import { Box, List, ListItem } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, Header } from 'components/Layout/SharedStyles';

export default function About() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        About
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/supersonic/hands.jpg'} alt='' style={{ width: "100%", height: "auto" }} />
      </Box>

      <Header>
        Seven Characteristics of Supersonic Dancers
      </Header>

      <List>
        <ListItem>Are aware of the community on the floor: dance with an awareness of one's movements, one's frame, the proper giving of weight, and the space within the hall.</ListItem>
        <ListItem>Dance with a variety of partners regardless of age, body type, gender expression.</ListItem>
        <ListItem>Are role models of consensual behavior on the dance floor.</ListItem>
        <ListItem>Swap roles or engage in other play when it is done with the utmost regard for the integrity of the dance and the line and with partner consent.</ListItem>
        <ListItem>Take time and effort to appreciate the talent of the callers and the bands.</ListItem>
        <ListItem>Avoid pre-booking and enjoy the spontaneity of seeking a new partner for each dance for a variety of experiences.</ListItem>
        <ListItem>Ensure our clothes and selves are 100% fragrance-free when attending Supersonic.</ListItem>
      </List>


      <Header>
        Covid Policy
      </Header>
      <Paragraph sx={{ mb: 2 }}>
        Supersonic will follow masking policies of the  Seattle Emerald City and Lake City contra dances. 
        As of November, this means well-fitted masks are required. 
        Vaccination encouraged but not required. 
        Please do not attend if you are feeling sick.
      </Paragraph>

      <Header>
        Food and Water
      </Header>
      <Paragraph>This is a high-energy weekend with only a few official breaks. Meals are your own responsibility and we encourage you to enjoy the many restaurants Ballard has to offer. Snacks will be provided throughout the weekend. Water will be available, but please bring your own water bottle.</Paragraph>
      <Paragraph>A list of restaurants around the area of the hall is available <StyledLink internal={true} to="/seattle">here</StyledLink>.</Paragraph>

      <Header>
        Housing Accomodations
      </Header>
      <Paragraph>This dance weekend is in Seattle. We will do our best to find housing for out-of-town guests. Please remember that we are all volunteers, so adjust expectations accordingly. If you have attended other dance weekends in Seattle, you are strongly encouraged to make your own arrangements with friends you have stayed with before.</Paragraph>
      <Paragraph>Do you need housing or can you offer housing to visiting dancers? Please be sure to include this as a part of your Supersonic registration.</Paragraph>
      <Paragraph>If you have any other questions about housing or hosting guests, please email: housing@supersoniccontra.com</Paragraph>
    </StyledPaper>
  );
}
