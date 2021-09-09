import React, { FC, useState, useRef } from 'react';
import styled from 'styled-components';

const METAMASK_LOGO = require('@assets/images/metamask-logo.svg').default;

const WalletManagementButton: FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const button = useRef<HTMLDivElement>(null);

  function handleClick(): void {
    button.current?.blur();
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') handleClick();
  } 

  return (
    <ButtonWrapperStyled
      ref={button}
      tabIndex={0}
      isWalletConnected={isWalletConnected}
      onMouseEnter={ () => setIsHovered(true) }
      onMouseLeave={ () => setIsHovered(false) }
      onFocus={ () => setIsFocused(true) }
      onBlur={ () => setIsFocused(false) }
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      {isWalletConnected ? (
        <div>
          { isHovered || isFocused ? (
            <span>Disconnect wallet</span>
            ) : (
            <span>0xC2fD...a3d6</span>
          )}
        </div>
      ) : (
        <div className="connect-wallet">
          <img className="connect-wallet__logo" src={METAMASK_LOGO} alt='' style={{ width: '30px' }} />
          <div>
            Connect Metamask
          </div>
        </div>
      )}
    </ButtonWrapperStyled>
  ); 
}

const ButtonWrapperStyled = styled.div<{
  isWalletConnected: boolean;
}>`
  background: var(--dark-color-2);
  color: var(--alternative-color);
  width: 220px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.4s all;
  user-select: none;
  border: 1px solid transparent;
  outline: none;

  ${({ isWalletConnected }) => isWalletConnected ? `
    &:hover, &:focus {
      color: var(--danger-color);
      border-color: var(--danger-color);
    }
  ` : `
    &:hover, &:focus {
      border-color: var(--alternative-color);
    }
  `}

  &:active {
    opacity: 0.8;
  }

  & .connect-wallet {
    display: flex;
    align-items: center;

    &__logo {
      margin-right: 8px
    }
  }
`;

export default WalletManagementButton;
