import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Item = styled(Button)`
  text-decoration: none;
  color: #fff;
  margin: 10px 0;
  height: calc(100vh - 88vh);
  transition: background 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
