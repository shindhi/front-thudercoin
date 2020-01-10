import React, { Component } from 'react';
import { TiArrowDown, TiArrowUp } from 'react-icons/ti';

import axios from '../../utils/httpClient';
import { Container, Table, Negative, Positive } from './styles';

class History extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    this.retrieveTransactions();
  }

  retrieveTransactions() {
    axios.get('/transactions').then(({ data }) =>
      this.setState({
        transactions: data,
      })
    );
  }

  render() {
    const { transactions } = this.state;

    return (
      <Container>
        <h1>Histórico Geral de Transações</h1>
        <br />
        <Table type={transactions.transactionType}>
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
            {transactions.map(transaction => (
              <tr>
                <td>
                  {transaction.transactionType === 'INPUT' ? (
                    <Positive>
                      <TiArrowUp color="green" />
                      <span>Entrada</span>
                    </Positive>
                  ) : (
                    <Negative>
                      <TiArrowDown color="red" />
                      <span>Saída</span>
                    </Negative>
                  )}
                </td>
                <td>{transaction.userAccount}</td>
                <td>{transaction.origin}</td>
                <td>
                  {transaction.transactionType === 'INPUT' ? (
                    <Positive>
                      <TiArrowUp color="green" />
                      <span>{transaction.value}</span>
                    </Positive>
                  ) : (
                    <Negative>
                      <TiArrowDown color="red" />
                      <span>{transaction.value}</span>
                    </Negative>
                  )}{' '}
                </td>
                <td>{transaction.dateTransaction}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default History;
