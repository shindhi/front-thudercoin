import { FaTaxi } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { MdRestaurant } from 'react-icons/md';

import styled from 'styled-components';

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

export const Category = styled.div`
  height: 100px;
  text-align: center;
`;

export const Round = styled.button`
  border: none;
  background: #fa8929;
  width: 100px;
  height: 100px;
  margin: 50px 45px;
  border-radius: 50%;
  color: white;
  display: inline-block;
  &:hover {
    background-color: #fe7600;
    cursor: pointer;
  }
`;
