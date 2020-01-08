import React from 'react';
import DataTable from 'react-data-table-component';

import { Container } from './styles';

const data = [
  {
    transactionType: 'Entrada',
    userAccount: 'Tiago',
    origin: 'Lecionou trilha de react',
    value: '550.00',
    dateTransaction: '11/11/2011',
  },
];

const columns = [
  {
    name: 'Tipo',
    selector: 'transactionType',
    sortable: true,
    grow: 1,
  },
  {
    name: 'Usuário',
    selector: 'userAccount',
    sortable: true,
    grow: 2,
  },
  {
    name: 'Origem',
    selector: 'origin',
    sortable: true,
    grow: 3,
  },
  {
    name: 'Valor',
    selector: 'value',
    sortable: true,
    grow: 1,
  },
  {
    name: 'Data',
    selector: 'dateTransaction',
    sortable: true,
    grow: 1,
  },
];

export default function History() {
  return (
    <Container>
      <DataTable
        title="Transactions"
        columns={columns}
        data={data}
        theme="solarized"
        pagination
      />
    </Container>
  );
}
