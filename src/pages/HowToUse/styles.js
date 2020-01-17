import { TiShoppingCart } from 'react-icons/ti';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

export const Cart = styled(TiShoppingCart)`
  width: 70px;
  height: 70px;
  margin: 15px;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Invoice = styled(FaFileInvoiceDollar)`
  width: 70px;
  height: 70px;
  margin: 15px;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Refund = styled(GiReceiveMoney)`
  width: 70px;
  height: 70px;
  margin: 15px;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Arrow = styled(FaArrowRight)`
  width: 70px;
  height: 70px;
  margin: 15px;
  color: #fe7600;
  @media (max-width: 770px) {
    margin: 12px;
    width: 56px;
    height: 56px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const Step = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  border: 1.5px solid #fd913a;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 25px;
  width: 15rem;
`;

export const Round = styled.button`
  border: none;
  background: #fa8929;
  margin: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  &:hover {
    background-color: #fe7600;
    cursor: default;
  }
  @media (max-width: 770px) {
    margin: 15px;
    width: 80px;
    height: 80px;
  }
`;

export const Img = styled.img`
  height: 170px;
  border-radius: 10px;
  color: orange;
`;

export const Content = styled.p`
  color: #fa8929;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ArrowDiv = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  display: flex;
  margin-top: 20px;
  margin-right: 25px;
  width: 5rem;
`;

