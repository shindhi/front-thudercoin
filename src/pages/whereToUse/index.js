import React, { Component } from 'react';
import './style.css';
import { FaTaxi } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { MdRestaurant } from 'react-icons/md';

import { CareStore } from '../../assets/img';

class WhereToUse extends Component {
  render() {
    return (
      <div id="container">
        <div id="categories">
          <div className="round">
            <MdRestaurant className="icon" />
          </div>
          <div className="round">
            <GiOpenBook className="icon" />
          </div>
          <div className="round">
            <FaTaxi className="icon" />
          </div>
          <div className="round">
            <img src={CareStore} alt="Care Store Logo" className="icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default WhereToUse;
