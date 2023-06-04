import { isMobile } from "react-device-detect";
import * as S from './ButtonRow-styles.js';

function BackButton({ onClick, text, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
}

function NextButton({ onClick, text, ...props }) {
  return (
    <S.NextButton onClick={onClick} {...props}>
      {text}
    </S.NextButton>
  );
}

export default function ButtonRow({ backButtonProps, nextButtonProps, centerButtonProps }) {
  return (
    <S.Box className={`${isMobile ? 'mobile' : 'desktop'}`}>
      <S.ButtonRow>
        {backButtonProps ?
          <BackButton
            type='button'
            onClick={backButtonProps.onClick}
            text={backButtonProps.text || 'Back'}
            className={backButtonProps.className || 'btn btn-secondary'}
          /> : <div /> // empty div to keep spacing
        }
        {centerButtonProps &&
          <>
            <BackButton
              type='button'
              onClick={centerButtonProps.onClick}
              text={centerButtonProps.text}
              className={centerButtonProps.className || 'btn btn-secondary'}
            />
            <div />
          </>
        }
        {nextButtonProps &&
          <NextButton
            type={nextButtonProps.type === 'submit' ? 'submit' : 'button'}
            onClick={nextButtonProps.type === 'submit' ? undefined : nextButtonProps.onClick}
            text={nextButtonProps.text || 'Next'}
            className={nextButtonProps.className || 'btn btn-primary'}
          />
        }
      </S.ButtonRow>
    </S.Box>
  );
}