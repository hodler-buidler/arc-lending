import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UiLogo } from '@components/ui/index';
import TheNavigation from '@components/TheNavigation/TheNavigation';
import TheWalletManagementButton from '@components/TheWalletManagementButton/TheWalletManagementButton';

const Header: FC = () => {
  return (
    <HeaderWrapperStyled>
      <div>
        <Link to="/">
          <UiLogo />
        </Link>
      </div>

      <div>
        <TheNavigation />
      </div>

      <div>
        <TheWalletManagementButton />
      </div>
    </HeaderWrapperStyled>
  ); 
}

const HeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;