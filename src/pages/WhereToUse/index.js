import React, { Component } from 'react';

import { CareStore } from '../../assets/img';
import axios from '../../utils/httpClient';
import About from '../About/index';
import {
  Restaurant,
  Book,
  Category,
  Round,
  Taxi,
  Img,
  Info,
  ItemList,
  Ul,
  Container,
} from './styles';

class WhereToUse extends Component {
  state = {
    origins: [],
  };

  handleClick = category => {
    axios.get(`/origins/filter?category=${category}`).then(({ data }) => {
      this.setState({
        origins: data,
      });
    });
  };

  componentDidMount() {
    this.handleClick("restaurante");
  }

  render() {
    const { origins } = this.state;

    return (
      <Container>
        <About />
        <Category>
          <Round onClick={() => this.handleClick('restaurante')}>
            <Restaurant />
          </Round>
          <Round onClick={() => this.handleClick('educação')}>
            <Book />
          </Round>
          <Round onClick={() => this.handleClick('transporte')}>
            <Taxi />
          </Round>
          <Round onClick={() => this.handleClick('careStore')}>
            <img
              src={CareStore}
              style={{ height: ' 70px',  margin: '15px'}}
              alt="Care Store Logo"
            />
          </Round>
        </Category>
        <Ul>
          {origins.map(origin => (
            <ItemList>
              <Img
                src={require(`../../assets/img/${origin.imagePath}`)}
                alt={origin.name}
              />
              <Info>
                <h2>{origin.name}</h2>
                <h3>{origin.address}</h3>
              </Info>
            </ItemList>
          ))}
        </Ul>
      </Container>
    );
  }
}

export default WhereToUse;
