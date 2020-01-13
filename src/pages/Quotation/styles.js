import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 0rem;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuotationTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(100, 0, 150, 1); */
  color: #fff;
  color: #000;
`;

export const QuotationDesc = styled.div`
  padding-top: 3rem;
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #640096;
`;

export const QuotationFilterBox = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 3em;
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  color: #fff;
  font-size: 8px;
`;

export const QuotationByYear = styled.div`
  padding-top: 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const QuotationByYearText = styled.div`
  padding-top: 0rem;
  display: flex;
  flex-direction: row;
`;

export const QuotationByYearSelectButton = styled.div`
  padding-top: 0rem;
  display: flex;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const QuotationByMonth = styled.div`
  padding-top: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuotationByMonthText = styled.div`
  padding-top: 0rem;
  display: flex;
  flex-direction: row;
`;

export const QuotationByMonthSelectButton = styled.div`
  padding-top: 0rem;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuotationByWeek = styled.div`
  padding-top: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuotationByWeekText = styled.div`
  padding-top: 0rem;
  display: flex;
  flex-direction: row;
`;

export const QuotationByWeekSelectButton = styled.div`
  padding-top: 0rem;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
