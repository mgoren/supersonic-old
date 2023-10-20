import { useEffect } from 'react';
import { scrollToTop } from 'utils';
import { RightAlignedInput } from '../Input';
import { ADMISSION_COST_RANGE, DONATION_OPTION, DONATION_RANGE } from "config";
import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { InputAdornment, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import PaymentExplanation from 'components/PaymentExplanation';

export default function PaymentInfo({ donate, setDonate, clampValue, admissionQuantity }) {
  const { values } = useFormikContext();

  useEffect(() => { scrollToTop(); },[])
  
  return (
    <section className='PaymentInfo'>

      <PaymentExplanation />

      <div className='admissions-section'>
        <StyledPaper className='admissions-cost'>
            {ADMISSION_COST_RANGE[0] < ADMISSION_COST_RANGE[1] ?
              <>
              <Title>Sliding scale</Title>
                <RightAlignedInput
                  sx={{ maxWidth: '5rem' }}
                  label={`How much are you able to pay per person? ($${ADMISSION_COST_RANGE[0]}-${ADMISSION_COST_RANGE[1]})`}
                  name="admissionCost"
                  pattern='###'
                  range={ADMISSION_COST_RANGE}
                  onBlur={(event) => clampValue({ event: event, range: ADMISSION_COST_RANGE})}
                  InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
                />
                <Typography>The break-even cost is $180 per dancer.</Typography>
                <Typography>Please consider paying at least this amount if you are able.</Typography>
              </>
            :
              <>
              <Title>Admission cost</Title>
                <p>
                  Number of admissions: {admissionQuantity}<br />
                  Price per admission: ${ADMISSION_COST_RANGE[0]}
                </p>
                <p>
                  Admissions total: ${admissionQuantity * ADMISSION_COST_RANGE[0]}
                </p>
              </>
            }
        </StyledPaper>

        {DONATION_OPTION &&
          <StyledPaper className='donation-section'>
            <Title>Additional contribution</Title>
            {!donate && 
              <RightAlignedInput
                label="Would you like to make an additional contribution to help defray expenses and support work-trade positions?"
                name="donate"
                buttonText="Yes"
                onClick={() => setDonate(true)}
              />
            }

            {donate && 
              <RightAlignedInput
                sx={{ minWidth: '6rem', maxWidth: '6rem' }}
                label="How much would you like to add as an additional contribution?"
                name="donation" 
                pattern='###'
                range={DONATION_RANGE}
                onBlur={(event) => clampValue({ event: event, range: DONATION_RANGE})}
                InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
                autoFocus={values['donation'] === 0}
                // onFocus={(e) => e.target.select()}
              />
            }
          </StyledPaper>
        }
      </div>      
    </section>
  );
}
