import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from '../../utils/httpClient'

import { Container } from './styles';

class History extends Component {
  state = {
    transactions: []
  };

  componentDidMount() {
    this.retrieveTransactions();
  }

  retrieveTransactions() {
    axios.get("/transactions")
      .then(({ data }) =>
        this.setState({
          transactions: data
        })
      )

  }

  columns = [
    {
      name: 'Tipo',
      selector: 'transactionType',
      sortable: true,
      grow: 2
    },
    {
      name: 'Usuário',
      selector: 'userAccount',
      sortable: true,
      grow: 2
    },
    {
      name: 'Origem',
      selector: 'origin',
      sortable: true,
      grow: 2
    },
    {
      name: 'ThunderCoins',
      selector: 'value',
      sortable: true,
      grow: 2
    },
    {
      name: 'Data / Hora',
      selector: 'dateTransaction',
      sortable: true,
      grow: 2
    }
  ]

  render(){
    return(
      <Container>
        <DataTable
          title="Transactions"
          columns={this.columns}
          data={this.state.transactions}
          theme="solarized"
          pagination
        />
      </Container>
    );
  }
}

export default History;
