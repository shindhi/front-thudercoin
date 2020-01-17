import React, { Component } from 'react';
import { TiArrowDown, TiArrowUp } from 'react-icons/ti';

import axios from '../../utils/httpClient';
import { Container, Table, Negative, Positive, Select } from './styles';

class History extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    this.retrieveTransactions();
    // this.retrieveCategories();
  }

  // urlCreator(transactionType, categoryName, accountUserName){
  //   if(transactionType === "" && categoryName === "" && accountUserName === ""){
  //     const params = `/transactions`;
  //   }
  //   return params;
  // }

  findByAny = transactionType => {
    let params;
    if (transactionType !== '') {
      params = `/transactions/filters?transactionType=${transactionType}`;
    } else {
      params = `/transactions`;
    }

    axios.get(params).then(({ data }) =>
      this.setState({
        transactions: data,
      })
    );
  };

  // retrieveCategories() {
  //   axios.get('/categories').then(({ data }) =>
  //     this.setState({
  //       categories: data,
  //     })
  //   );
  // }

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
        {/* <form onSubmit={this.findByAny}>
          <input type="text" placeholder="Nome do Usuário" />
          <select className="form-control" name="transactionType">
            <option value=""> Selecione uma categoria</option>
            {categories.map(category => (
              <option value={category.name}>{category.name}</option>
            ))}
          </select>
          <select className="form-control" name="transactionType">
            <option value=""> Selecione um tipo de transação</option>
            <option value="INPUT"> Transação de Entrada</option>
            <option value="OUTPUT"> Transação de Saída</option>
          </select>
          <button type="submit">Golias</button>
        </form> */}
        <div>
          <Select
            className="custom-select sources"
            name="transactionType"
            onChange={transactionType =>
              this.findByAny(transactionType.target.value)
            }
          >
            <option value="">Selecione um filtro para as transações</option>
            <option value="INPUT"> Transação de Entrada</option>
            <option value="OUTPUT"> Transação de Saída</option>
          </Select>
        </div>
        <br />
        <Table type={transactions.transactionType} id="myTable">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Usuário</th>
              <th>Categoria</th>
              <th>Origem</th>
              <th>ThunderCoins</th>
              <th>Data / Hora</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
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
                <td>{transaction.category}</td>
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
