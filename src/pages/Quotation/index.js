import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

import axios from '../../utils/httpClient';
import { Container } from './styles';

export default function Quotation() {
  const [dates, setDates] = useState([]);

  /**
   * Separar uma funcao
   */

  useEffect(() => {
    async function loadQuotations() {
      const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ];
      const arrDate = [['Date', 'Value']];

      const { data } = await axios.get('/quotations');

      data.map(d => {
        const { createdAt, value } = d;
        let convertDate = createdAt.split(' ')[0].split(/\//);

        convertDate = [convertDate[1], convertDate[0], convertDate[2]].join(
          '/'
        );

        return arrDate.push([new Date(convertDate), value]);

        // const monthPosition = new Date(convertDate).getMonth();
        // return arrDate.push([months[monthPosition], value]);
      });
      setDates(arrDate);
    }

    loadQuotations();
  }, []);

  return (
    <Container>
      <Chart
        width="100%" // Largura area grafico
        height={500} // Altura area grafico
        chartType="LineChart" // Tipo de grafico
        loader={<div>Loading Chart</div>}
        data={dates} // Valores
        options={{
          title: 'Cotação Thunder Coin', // Titulo grafico
          titleTextStyle: {
            fontSize: 18,
            fontName: 'Roboto',
          },
          chartArea: {
            width: '80%',
            height: '70%',
            backgroundColor: '#fff',
            borderRadius: '50%',
          }, // Area interna grafico
          hAxis: {
            title: 'Data',
            titleTextStyle: { color: '#000' },
            format: 'd/M/yy',
            gridlines: { count: 15 },
          }, // Legenda rodape grafico
          vAxis: { title: 'Valores (R$)', minValue: 0, format: 'currency' },
        }}
      />
    </Container>
  );
}
