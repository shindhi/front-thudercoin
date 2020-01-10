import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Menu = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
`;

export const CardExibition = styled.button`
    background: none;
    border: 1.5px solid #FD913A;
    color: #FD913A;
    padding: 8px 14px;
    border-radius: 50px;
    transition: background 0.2s;
    margin: 30px;
    font-size: 20px;

    &:hover {
        background: #FD913A;
        color: #fff;
      }
`

export const Item = styled(Link)`
    text-decoration: none;
    color: #000;
`