import styled from 'styled-components';

const FieldWrapperStyled = styled.div<{
  disabled?: boolean;
  viewOnly?: boolean;
  invalid?: boolean;
}>`
  border: 1px solid var(--dark-color-2);
  background: var(--dark-color-2);
  display: flex;
  align-items: center;
  height: 55px;
  border-radius: 12px;
  padding: 0 16px;
  transition: 0.2s all;

  ${({ disabled }) => disabled && `
    &, & * {
      cursor: not-allowed;
    }
  `}

  ${({ invalid }) => invalid ? `
    border-color: var(--danger-color);
  ` : `
    &:focus-within {
      border-color: var(--alternative-color);
    }
  `}
`;

export default FieldWrapperStyled;
