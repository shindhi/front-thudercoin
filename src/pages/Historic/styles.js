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

export const Select = styled.select`
  font-size: 16px;
  flex: 1;
  padding: 0.2em;
  color: #000;
  cursor: pointer;
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #fff;
  overflow: hidden;
  border-radius: 0.25em;

  option {
    background: #fff;
    height: 30px;
    border: 1px solid #cbcbcb;
    padding-left: 17px;
    padding-top: 12px;
  }
`;
