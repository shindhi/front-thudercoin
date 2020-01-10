import React, { Component } from 'react';

import { CareStore } from '../../assets/img';
import axios from '../../utils/httpClient';
import {
  Restaurant,
  Book,
  Category,
  Round,
  Taxi,
  Img,
  Info,
  ItemList,
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

  render() {
    const { origins } = this.state;

    return (
      <div>
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
              style={{ height: ' 70px' }}
              alt="Care Store Logo"
            />
          </Round>
        </Category>
        <ul>
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
        </ul>
      </div>
    );
  }
}

export default WhereToUse;
