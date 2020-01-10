import styled from 'styled-components';

export const Container = styled.div`
  font-size: 17px;
  padding: 20px 20px;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  color: black;
  text-align: center;
  border-spacing: 0px;
  background-color: rgba(255, 141, 107, 0.2);
  border-collapse: collapse;
  border-radius: 0.5em;
  overflow: hidden;

  th,
  td {
    padding: 8px;
  }

  th {
    background-color: #fe7600;
    color: white;
  }

  td {
    border-bottom: 1px solid #ff8d6b;
  }

  tr:hover {
    background-color: rgba(255, 141, 107, 0.3);
  }
`;

export const Negative = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: red;
  }
`;

export const Positive = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: green;
  }
`;
