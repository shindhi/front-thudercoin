import { IoIosFlash } from 'react-icons/io';

import styled from 'styled-components';

export const CoinThunder = styled(IoIosFlash)`
  font-size: 20px;
  color: #faff00;
  border: 1.5px solid #faff00;
  border-radius: 50%;
  margin-right: 3px;
`;

export const BasicInfo = styled.div`
  padding-top: 15%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  span {
    margin-top: 15px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding-bottom: 10px;
    color: #fff;

    display: flex;

    span {
      margin-top: 4px;
      font-weight: bold;

      display: flex;
      align-items: center;

      & + span {
        margin-left: 8px;
      }
    }
  }
`;

export const ConfigProfile = styled.button`
  background: none;
  border: 1.5px solid #fff;
  color: #fff;
  padding: 8px 14px;
  border-radius: 50px;
  transition: background 0.2s;

  &:hover {
    background: #fff;
    color: #fc8e4c;
  }
`;
