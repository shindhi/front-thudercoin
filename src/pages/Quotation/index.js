import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

import axios from '../../utils/httpClient';
import {
  Container,
  QuotationTitle,
  QuotationDesc,
  QuotationFilterBox,
  QuotationByWeek,
  QuotationByWeekText,
  QuotationByWeekSelectButton,
} from './styles';

const columns = [
  {
    type: 'string',
    label: 'Mês',
  },
  {
    label: 'Cotação',
    type: 'number',
  },
];

export default function Quotation() {
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('/quotations');

    setRows(data.map(d => [d.createdAt.split(' ')[0], d.value]));
  }, []);

  // ARRUMAR FUNCOES DO INPUT

  return (
    <Container>
      <QuotationTitle>
        <h1>Cotação ThunderCoin</h1>
      </QuotationTitle>

      <QuotationFilterBox>
        <QuotationByWeek>
          <QuotationByWeekText>
            <h1>Data Inicial:</h1>
          </QuotationByWeekText>
          <QuotationByWeekSelectButton>
            <input type="date" />
          </QuotationByWeekSelectButton>
          <QuotationByWeekText>
            <h1>Data Final:</h1>
          </QuotationByWeekText>
          <QuotationByWeekSelectButton>
            <input type="date" label="Week" value="" />
          </QuotationByWeekSelectButton>
        </QuotationByWeek>
      </QuotationFilterBox>

      <div className="QuotationGraph">
        <Chart
          options={{
            legendTextStyle: { color: '#FFF' },
            titleTextStyle: { color: '#FFF' },
            colors: ['#640096'],
            backgroundColor: '#',
          }}
          chartType="AreaChart"
          width="100vh"
          height="50vh"
          legendToggle
          rows={rows}
          columns={columns}
        />
      </div>

      <QuotationDesc>
        <h1>Acompanhe a cotação do ThunderCoin.</h1>
      </QuotationDesc>
    </Container>
  );
}
