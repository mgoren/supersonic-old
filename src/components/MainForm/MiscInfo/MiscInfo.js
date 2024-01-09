import { useEffect } from 'react';
import { scrollToTop, mailtoLink } from 'utils.js';
import { Input, CheckboxInput } from '../Input';
import { StyledPaper, Title, StyledLink } from 'components/Layout/SharedStyles';
import { Box, Typography } from '@mui/material';
import { EMAIL_CONTACT, HOSPITALITY_OPTIONS, SHARE_OPTIONS } from 'config';

export default function MiscInfo() {
  useEffect(() => { scrollToTop(); },[])
  return (
    <StyledPaper className='MiscInfo'>
      <Box sx={{ mb: 6 }}>
        <Title>Housing</Title>
        <CheckboxInput
          name='hospitality'
          options={HOSPITALITY_OPTIONS}
        />
        <Typography sx={{ mt: 1.5 }}><em>Note that housing requests are currently full.</em></Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Title>What information do you want in the roster?</Title>
        <CheckboxInput
          name='share'
          options={SHARE_OPTIONS}
        />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Title>Volunteering</Title>
        <Typography sx={{ mt: 1.5 }}>To volunteer, please contact <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.</Typography>
      </Box>

      <Title>Final comments</Title>
      <Input
        type='textarea'
        name='comments'
        label="Please elaborate on any of the above questions or add any additional comments about your registration. Let us know if we missed anything, or there is something else we should know."
      />
    </StyledPaper>
  );
}
