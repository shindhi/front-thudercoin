import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import axios from '../../../../utils/httpClient';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {},
  actions: {},
}));

export default function AreaGraph({ className, ...rest }) {
  const classes = useStyles();

  const [dates, setDates] = useState([]);

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
      let arrDate = [['Date', 'Value']];

      const { data } = await axios.get('/quotations');

      const arrTemp = [
        ['Date', 'Value'],
        [new Date(2020, 0, 9), 3.48],
        [new Date(2020, 1, 10), 5.98],
        [new Date(2020, 2, 11), 1.5],
        [new Date(2020, 3, 5), 2.5],
        [new Date(2020, 4, 20), 0.7],
      ];

      if (data === '') {
        arrDate = arrTemp;
      } else {
        data.map(d => {
          const { createdAt, value } = d;
          let convertDate = createdAt.split(' ')[0].split(/\//);
          convertDate = [convertDate[1], convertDate[0], convertDate[2]].join(
            '/'
          );

          return arrDate.push([new Date(convertDate), value]);
        });
      }

      setDates(arrDate);
    }

    loadQuotations();
  }, []);

  return (
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
        }, // Area interna grafico
        hAxis: {
          title: 'Data',
          titleTextStyle: { color: '#000' },
          format: 'd/M/yy',
          // gridlines: { count: 15 },
        }, // Legenda rodape grafico
        vAxis: { title: 'Valores (R$)', format: 'currency' },
      }}
    />
  );
}
