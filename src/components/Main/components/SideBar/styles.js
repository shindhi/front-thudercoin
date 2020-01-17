import { Link } from 'react-router-dom';

import { darken } from 'polished';
import styled from 'styled-components';

export const Bar = styled.div`
  grid-area: sidebar;
  background: #fc8e4c;
`;

export const Container = styled.div`
  /* height: calc(100vh - 5vh); */
  padding-top: calc(100% - 80%);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding-top: 2rem;
  }
`;

export const Menu = styled.div`
  padding: calc(100% - 90%) 0;
  width: 100%;

  @media screen and (max-width: 1280px) {
    padding: 20px 0;
  }
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 10px 0;
  height: calc(100vh - 88vh);
  background: ${props => (props.active ? darken(0.1, '#fc8e4c') : '#fc8e4c')};
  transition: background 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, '#fc8e4c')};
  }

  @media screen and (max-width: 1280px) {
    /* height: 80px; */
    height: calc(100vh - 90vh);
  }
`;
