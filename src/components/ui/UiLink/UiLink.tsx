import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Mode = 'router' | 'html' | 'empty';
type LinkProps = {
  to: string,
  href?: string,
  target?: '_blank',
}

export interface UiLinkProps {
  children: ReactNode,
  to: string,
  mode?: Mode,
  theme?: 'default' | 'info',
  openHtmlLinkSeparately?: boolean,
  active?: boolean;
  onClick?: () => void;
}

const UiLink: FC<UiLinkProps> = ({
  children,
  mode = 'router',
  theme = 'default',
  to,
  openHtmlLinkSeparately = false,
  active,
  onClick = () => {},
}) => {
  const wrapperElementsMap = {
    router: NavLink,
    html: 'a',
    empty: 'div',
  }

  const linkProps: LinkProps = { to: '' };

  if (mode === 'router') linkProps.to = to;
  if (mode === 'html') {
    linkProps.href = to;
    if (openHtmlLinkSeparately) linkProps.target = '_blank';
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') onClick();
  } 

  return (
    <UiLinkWrapperStyled
      as={wrapperElementsMap[mode]}
      theme={theme}
      { ...linkProps }
      tabIndex={0}
      className={`${ active && 'active'}`}
      onClick={onClick}
      onKeyPress={handleKeyPress}
    >
      { children }
    </UiLinkWrapperStyled>
  ); 
}

UiLink.defaultProps = {
  mode: 'router',
  theme: 'default',
  openHtmlLinkSeparately: false,
  active: false,
  onClick: () => {},
}

const UiLinkWrapperStyled = styled(NavLink)<{
  theme: 'default' | 'info'
}>`
  --link-color: var(--app-default-link-color);
  --link-hover-color: var(--app-default-active-link-color);

  color: var(--link-color);
  text-decoration: none;
  transition: 0.2s all;
  user-select: none;
  cursor: pointer;

  &:hover, &.active {
    color: var(--link-hover-color);
  }

  &:not(.active):active {
    opacity: 0.7;
  }

  ${({ theme }) => theme === 'info' ? `
    --link-color: rgba(var(--blue-color-1-rgb-string), 0.6);
    --link-hover-color: var(--info-color);
  ` : ``}
`;

export default UiLink;