import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-size: 17px;
  padding: 20px 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const Table = styled.table.attrs(props => ({}))`
  width: 100%;
  color: black;
  text-align: center;
  border-spacing: 0px;
  ${props =>
    props.type &&
    css `
      background: blue;
    `
  }

  th, td {
    padding: 8px;
  }

  th{
    background-color: rgba(252,170,0,1);
    color: white;
  }

  td{
    border-bottom: 1px solid #DDD;
  }

  tr:hover{
    background-color: #F5F5F5;
  }
`;
