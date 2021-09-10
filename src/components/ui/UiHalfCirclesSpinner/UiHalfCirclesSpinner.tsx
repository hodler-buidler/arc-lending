import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export interface UiHalfCirclesSpinnerProps {
  theme?: 'alternative' | 'info' | 'success' | 'warning' | 'danger';
  customColor?: string;
  size?: string;
  speed?: string;
};

const UiHalfCirclesSpinner: FC<UiHalfCirclesSpinnerProps> = ({
  theme,
  customColor,
  size,
  speed,
}) => {
  return (
    <SpinnerStyled
      theme={theme}
      customColor={customColor}
      size={size}
      speed={speed}
    />
  ); 
}

UiHalfCirclesSpinner.defaultProps = {
  theme: 'alternative',
  customColor: '',
  size: '32px',
  speed: '1.2s',
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div<{
  theme?: 'alternative' | 'info' | 'success' | 'warning' | 'danger';
  customColor?: string;
  size?: string;
  speed?: string;
}>`
  display: inline-block;

  ${({ size }) => `
    width: ${size};
    height: ${size};  
  `}

  &:after {
    content: ' ';
    display: block;

    ${({ size }) => `
      width: ${size};
      height: ${size};  
    `}

    border-radius: 50%;
    ${({ theme, customColor }) => `
      border: 2px solid ${customColor || `var(--${theme}-color)`};
      border-color: ${customColor || `var(--${theme}-color)`} transparent ${customColor || `var(--${theme}-color)`} transparent;
    `}
    animation: ${spin} ${({ speed }) => speed } linear infinite;
  }
`;

export default UiHalfCirclesSpinner;