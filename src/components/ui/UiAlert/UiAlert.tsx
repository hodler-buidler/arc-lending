import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

type AlertTheme = 'info' | 'warning' | 'danger' | 'success';

export interface UiAlertProps {
  children: ReactNode;
  theme?: AlertTheme;
};

const UiAlert: FC<UiAlertProps> = ({
  theme = 'info',
  ...props
}) => {
  const alertIconsMap = {
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faExclamationTriangle,
    danger: faTimesCircle,
  }

  return (
    <AlertWrapperStyled theme={theme}>
      <FontAwesomeIcon className="alert-icon" icon={alertIconsMap[theme]} />

      <div>
        { props.children }
      </div>
    </AlertWrapperStyled>
  )
}

UiAlert.defaultProps = {
  theme: 'info',
}

const AlertWrapperStyled = styled.div<{
  theme: AlertTheme;
}>`
  --alert-theme-color: var(--dark-color-4);
  border-radius: 20px;
  background: var(--dark-color-3);
  padding: 12px 20px;
  border: 1px solid var(--alert-theme-color);
  color: var(--alternative-color);
  display: flex;
  align-items: center;

  & .alert-icon {
    font-size: 24px;
    margin-right: 16px;
    color: var(--alert-theme-color);
  }

  ${({ theme }) => theme === 'info' ? `
    --alert-theme-color: var(--info-color);
  ` : ``}

  ${({ theme }) => theme === 'success' ? `
    --alert-theme-color: var(--success-color);
  ` : ``}

  ${({ theme }) => theme === 'danger' ? `
    --alert-theme-color: var(--danger-color);
  ` : ``}

  ${({ theme }) => theme === 'warning' ? `
    --alert-theme-color: var(--warning-color);
  ` : ``}
`;

export default UiAlert;