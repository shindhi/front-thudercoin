import React, { Component } from 'react';
import axios from '../../utils/httpClient'

import { Container, Table } from './styles';

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

  render(){
    return(
      <Container>
        <Table type={this.state.transactions.transactionType}>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Usuário</th>
              <th>Origem</th>
              <th>ThunderCoins</th>
              <th>Data / Hora</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => <tr>
              <td>{transaction.transactionType === "INPUT" ? "Entrada" : "Saída"}</td>
              <td>{transaction.userAccount}</td>
              <td>{transaction.origin}</td>
              <td id="teste">{transaction.transactionType === "INPUT" ? "+ " : "- "}{transaction.value}</td>
              <td>{transaction.dateTransaction}</td>
            </tr>)}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default History;
