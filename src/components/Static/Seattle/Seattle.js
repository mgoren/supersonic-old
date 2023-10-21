import { Box, List, ListItem } from '@mui/material';
import { StyledPaper, PageTitle, Paragraph, Header } from 'components/Layout/SharedStyles';

export default function Seattle() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Seattle
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/supersonic/seattle.jpg'} style={{ width: "100%", height: "auto" }} />
      </Box>

      <Header>
        Lake City Contra Dance
      </Header>

      <Paragraph> Come dancing the Thursday evening before Supersonic!</Paragraph>
      <Paragraph>Directions to the Lake City contra dance can be found <a href={process.env.PUBLIC_URL + '/supersonic/LakeCityContraMap.pdf'}>here</a>.</Paragraph>

      <Header>
        Dining
      </Header>
      <Paragraph>Click <a href={process.env.PUBLIC_URL + '/supersonic/Supersonic-Dining-Guide-2020.pdf'}>here</a> to view our dining guide (last updated 2020).</Paragraph>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column" }, justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Header>
            Around Seattle
          </Header>
          <List>
            <ListItem><a href="https://www.theochocolate.com/factory-tours/" target="_blank">Take a chocolate factory tour at Theo Chocolate</a></ListItem>	
            <ListItem><a href="https://fremont.com/explore/sights/" target="_blank">Visit the offbeat art in the Fremont neighborhood and say 'hello' to the Fremont Troll</a></ListItem>	
            <ListItem><a href="http://fryemuseum.org" target="_blank">Visit The Frye Art Museum (free)</a></ListItem>	
            <ListItem><a href="http://mohai.org" target="_blank">Learn about Seattle history with MOHAI</a></ListItem>	
            <ListItem><a href="http://museumofflight.org" target="_blank">Prepare for takeoff at the Museum of Flight</a></ListItem>	
            <ListItem><a href="https://volunteerparkconservatory.org" target="_blank">Get a tropical feeling at the Volunteer Park Conservatory</a></ListItem>	
            <ListItem><a href="https://www.pacificsciencecenter.org" target="_blank">Question reality or take a walk with butterflies at the Pacific Science Center</a></ListItem>	
            <ListItem><a href="https://botanicgardens.uw.edu/washington-park-arboretum/visit/graham-visitors-center/" target="_blank">Take a walk at the Washington Park Arboretum</a></ListItem>	
            <ListItem><a href="http://www.undergroundtour.com" target="_blank">Go underground</a></ListItem>	
            <ListItem><a href="https://www.elliottbaybook.com/" target="_blank">Find new reading material at The Elliott Bay Book Company</a></ListItem>	
            <ListItem><a href="http://www.wingluke.org" target="_blank"> Visit Seattle's Chinatown, especially The Wing</a></ListItem>	
            <ListItem><a href="https://seattleboulderingproject.com" target="_blank">Go bouldering with the Seattle Bouldering Project</a></ListItem>	
            <ListItem><a href="http://www.livingcomputers.org" target="_blank">Geek out at the Living Computer Museum</a></ListItem>
          </List>
        </Box>

        <Box sx={{ mt: 1 }}>
          <Header>
            Ballard
          </Header>
          <List>
            <ListItem><a href="http://ballardlocks.org" target="_blank">Visit the Ballard Locks</a></ListItem>
            <ListItem><a href="http://www.seattle.gov/parks/find/parks/golden-gardens-park" target="_blank">Take a walk at the Golden Gardens Park.</a></ListItem>
            <ListItem><a href="http://www.fulltilticecream.com">Play pinball while eating ice cream at Full Tilt</a></ListItem>
            <ListItem><a href="http://www.sfmamarkets.com/visit-ballard-farmers-market">And, if you can tear yourself away from dancing, the Ballard Farmers Market is year-round</a></ListItem>
          </List>
        </Box>
      </Box>
    </StyledPaper>
  );
}
