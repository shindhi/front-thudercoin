import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Card = styled.div`
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

export const Title = styled.h2`
  color: #fa8929;
  font-size: 25px;
  padding: 20px;
`;

export const Content = styled.p`
  color: #fa8929;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: left;
`;
