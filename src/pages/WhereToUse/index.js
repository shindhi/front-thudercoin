import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Restaurant, Book, Category, Round, Taxi } from './styles';

class WhereToUse extends Component {
  render() {
    return (
      <div id="container">
        <Category>
          <Round>
            <Restaurant />
          </Round>
          <Round>
            <Book />
          </Round>
          <Round>
            <Taxi />
          </Round>
          {/* <Round>
            <img src={CareStore} alt="Care Store Logo" className="icon" />
          </Round> */}
        </Category>
      </div>
    );
  }
}

export default WhereToUse;
