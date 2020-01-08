import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 7fr;
  grid-template-rows: 5vh 95vh;

  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 7vh 93vh;
  }
`;
