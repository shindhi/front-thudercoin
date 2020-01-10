import { FaTaxi } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { MdRestaurant } from 'react-icons/md';

import styled from 'styled-components';

import { CareStore } from '../../assets/img';

export const Restaurant = styled(MdRestaurant)`
  width: 70px;
  height: 70px;
  margin: 15px;
`;

export const Book = styled(GiOpenBook)`
  width: 70px;
  height: 70px;
  margin: 15px;
`;

export const Taxi = styled(FaTaxi)`
  width: 70px;
  height: 70px;
  margin: 15px;
`;

export const CareStoreLogo = styled.svg`
  width: 70px;
  height: 70px;
  // background: black;
`;

export const Category = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
`;

// export const XPTO = styled(Category)``;

export const Round = styled.button`
  border: none;
  background: #fa8929;
  width: 100px;
  height: 100px;
  //margin: 50px 45px;
  border-radius: 50%;
  color: white;
  display: inline-block;
  &:hover {
    background-color: #fe7600;
    cursor: pointer;
  }
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  margin: 30px;
  border: 2px solid #fa8929;
  border-radius: 15px;
  padding: 10px;
`;

export const Img = styled.img`
  width: 230px;
  height: 170px;
  border-radius: 10px;
`;

export const Info = styled.div`
  margin: 0 0 0 20px;
`;
