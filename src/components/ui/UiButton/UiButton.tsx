import { FC, ReactNode, useRef } from 'react';
import styled from 'styled-components';

export interface UiButtonProps {
  children: ReactNode;
  mode?: 'default';
  theme?: 'default' | 'primary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => unknown;
};

const UiButton: FC<UiButtonProps> = ({
  children,
  mode = 'default',
  theme = 'default',
  size = 'medium',
  disabled = false,
  onClick = () => {},
}) => {
  const button = useRef<HTMLDivElement>(null);

  function handleClick(): void {
    button.current?.blur();
    onClick();
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter' && !disabled) handleClick()
  } 

  return (
    <ButtonWrapperStyled
      ref={button}
      tabIndex={disabled ? -1 : 0}
      mode={mode}
      theme={theme}
      size={size}
      disabled={disabled}
      onClick={disabled ? () => {} : handleClick}
      onKeyPress={handleKeyPress}
    >
      { children }
    </ButtonWrapperStyled>
  ); 
}

UiButton.defaultProps = {
  disabled: false,
  mode: 'default',
  theme: 'default',
  size: 'medium',
  onClick: () => {},
}

const ButtonWrapperStyled = styled.div<{
  mode?: 'default';
  theme?: 'default' | 'primary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  user-select: none;
  transition: 0.2s all;
  width: 100%;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};

  ${({ size }) => size === 'small' ? `
    height: 36px;
    padding: 0 12px;
    font-size: 14px;
  ` : ``}

  ${({ size }) => size === 'medium' ? `
    height: 55px;
    padding: 0 16px;
    font-size: 18px;
  ` : ``}

  ${({ size }) => size === 'large' ? `
    height: 64px;
    padding: 0 20px;
    font-size: 20px;
  ` : ``}

  ${({ mode, disabled, theme }) => mode === 'default' ? `
    --bg-color: transparent;
    --text-color: var(--alternative-color);

    color: var(--text-color);
    background: var(--bg-color);
    border-radius: 12px;
    font-weight: 600;

    ${disabled ? `
      opacity: 0.5;
    ` :  `
      &:hover, &:focus {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.5;
      }
    `}

    ${theme === 'default' ? `
      --bg-color: var(--dark-color-2);
    ` : ``}
    
    ${theme === 'primary' ? `
      --bg-color: linear-gradient(89.93deg, #D94CD6 -57.62%, #51B6F9 173.96%, rgba(217, 76, 214, 0) 173.98%);;
    `: ``}
  ` : ``}
`;

export default UiButton;