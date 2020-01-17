import React, { Component } from 'react';

import { GymWeight } from '../../assets/img';
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
    axios.get(`/origins/filter/earn-expend?earn=FALSE&expend=TRUE`).then(({ data }) => {
      let filteredOrigins=[];
      data.forEach(origin => {
        if (origin.category.name===category) {
          filteredOrigins.push(origin)
        }
      });
      this.setState({
        origins: filteredOrigins,
      });
    });
  };

  componentDidMount() {
    this.handleClick("Restaurante");
  }

  render() {
    const { origins } = this.state;

    return (
      <Container>
        <About />
        <Category>
          <Round onClick={() => this.handleClick('Restaurante')}>
            <Restaurant />
          </Round>
          <Round onClick={() => this.handleClick('Educacao')}>
            <Book />
          </Round>
          <Round onClick={() => this.handleClick('Transporte')}>
            <Taxi />
          </Round>
          <Round onClick={() => this.handleClick('Academia')}>
            <img
              src={GymWeight}
              style={{ height: '80px'}}
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
