import { EMAIL_CONTACT } from "config";
import { mailtoLink } from "utils";
import { StyledLink, StyledPaper, Title } from 'components/Layout/SharedStyles';
import { Divider, Typography } from '@mui/material';

export default function PaymentExplanation() {
  return (
    <StyledPaper>
      <Title>Where does my money go?</Title>
      <Typography><strong>Talent & Staff (stipend/travel/accomodations):</strong> 60% of the budget &mdash; we believe in compensating our people at the higher end of the going rate.</Typography>
      <Typography><strong>Hall Rental/Equipment:</strong> 25% of the budget</Typography>
      <Typography><strong>Snacks/Supplies:</strong> 10% of the budget</Typography>
      <Typography><strong>Administrative Costs:</strong> 5% of the budget</Typography>

      <Title sx={{mt: 4}}>Sliding Scale Pay-What-You-Can</Title>
      <Typography>Supersonic is committed to giving dancers the opportunity to experience our flight regardless of financial situation. However, Supersonic is not affiliated with an organization and has no source for funding except from you, our dancers, with your registration fee. The break-even cost per dancer is $180.</Typography>

      <Title sx={{mt: 4}}>Work-Trade</Title>
      <Typography>A limited number of work-trade opportunities exist for $80 or full registration. Note that these positions will require missing dance time, time off on Friday, or advance work. For details, please contact Karen at <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.</Typography>

      <Title sx={{mt: 4}}>Scale</Title>
      <Typography>$120 minimum &mdash; if you cannot afford this, consider applying for work-trade.</Typography>
      <Typography>$180 break-even &mdash; this is the amount needed per attendee to cover costs.</Typography>
      <Typography>$240 &mdash; allow one dancer to attend at the low end of the scale.</Typography>
      <Typography>$280 &mdash; allow one dancer to attend work-trade.</Typography>
    </StyledPaper>
  );
}
