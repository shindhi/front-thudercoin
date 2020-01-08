import styled from 'styled-components';
import { IoIosFlash } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Bar = styled.div`
  grid-area: sidebar;
  background: rgba(254, 118, 0, 0.8);
`;

export const CoinThunder = styled(IoIosFlash)`
  font-size: 20px;
  color: #FAFF00;
  border: 1.5px solid #FAFF00;
  border-radius: 50%;
  margin-right: 3px;
`;


export const Container = styled.div`
  /* height: calc(100vh - 5vh); */
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
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
    color: rgba(254, 118, 0, 0.8);
  }
`;

export const Menu = styled.div`
  padding: 40px 0;
  width: 100%;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
  min-height: 130px;
  margin: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    background: rgba(254, 118, 0, 1);
  }
`;

