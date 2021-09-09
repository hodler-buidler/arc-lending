import { FC } from 'react';
import styled from 'styled-components';
const LOGO_IMG = require('@assets/images/logo.svg').default;

export interface UiLogoProps {
  width?: string;
};

const UiLogo: FC<UiLogoProps> = (props) => {
  return (
    <LogoStyled
      src={LOGO_IMG}
      alt=""
      width={props.width}
    />
  ); 
}

const LogoStyled = styled.img<{
  width?: string;
}>`
  user-select: none;
  width: ${({ width }) => width ? width : '62px'};
`;

export default UiLogo;