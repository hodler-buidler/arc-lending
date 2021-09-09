import styled from 'styled-components';

const FieldContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  & .left-additions {
    margin-right: 16px;
  }

  & .right-additions {
    margin-left: 16px;
  }
`;

export default FieldContainerStyled;