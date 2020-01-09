import React, { Component } from 'react';

import { RestaurantPhoto, CareStore } from '../../assets/img';
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
          {this.state.origins.map(origin => (
            <ItemList>
              <Img src={RestaurantPhoto} alt="Foto do restaurante" />
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
