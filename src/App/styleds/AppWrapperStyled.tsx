import styled from 'styled-components';

const AppWrapperStyled = styled.div`
  background-image: radial-gradient(circle closest-corner at -4% 37%, rgba(40,72,122, 0.85), transparent),
                    radial-gradient(circle closest-corner at 105% 59%, rgba(138,41,129, 0.7), transparent);
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 50px 60px 35px 60px;
`;

export default AppWrapperStyled;