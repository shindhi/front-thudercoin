import styled from 'styled-components';
import {MdRestaurant} from 'react-icons/md';
import {GiOpenBook} from 'react-icons/gi';
import {FaTaxi} from 'react-icons/fa';

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

export const Round = styled.div`
    background: #FA8929;
    width: 100px;
    height: 100px;
    margin: 50px 45px;
    border-radius: 50%;
    color: white; 
    display: inline-block;

    &:hover{
        background-color: #FE7600;
        cursor: pointer;

    }
`;

