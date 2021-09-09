import { FC } from 'react';
import styled from 'styled-components';
import { UiLink } from '@components/ui/index';

const Navigation: FC = () => {
  return (
    <NavbarWrapperStyled>
      <div className="navbar-item">
        <UiLink to="/vaults">Vaults</UiLink>
      </div>
      <div className="navbar-item">
        <UiLink to="/borrow">Borrow</UiLink>
      </div>
    </NavbarWrapperStyled>
  ); 
}

const NavbarWrapperStyled = styled.div`
  display: flex;
  align-items: center;

  & .navbar-item {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Navigation;