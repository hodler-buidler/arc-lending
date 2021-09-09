import styled from 'styled-components';

const FieldStyled = styled.input<{ 
  disabled?: boolean;
  viewOnly?: boolean;
}>`
  color: var(--alternative-color);
  background: transparent;
  font-size: 24px;
  line-height: 35px;
  font-weight: 500;
  outline: none;
  border: none;
  width: 100%;

  ${({ disabled, viewOnly }) => (disabled || viewOnly) ? `
    color: var(--dark-color-4);
  ` : ``}

  ${({ viewOnly }) => viewOnly ? `
    cursor: text;
  ` : ``}

  &::placeholder {
    color: var(--dark-color-2);
  }
`;

export default FieldStyled;