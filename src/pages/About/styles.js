import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  height: 110px;
`;

export const CardExibition = styled.button`
  background: none;
  border: 1.5px solid #fd913a;
  color: #fd913a;
  padding: 8px 14px;
  border-radius: 50px;
  transition: background 0.2s;
  margin: 30px;
  font-size: 20px;

  &:hover {
    background: #fd913a;
    color: #fff;
  }
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: #000;
`;