import React from 'react';

import { Restaurant, Book, Category, Round, Taxi } from './styles';

function WhereToUse() {
  function handleClick(category) {
    console.log(category);
  }

  return (
    <div id="container">
      <Category>
        <Round onClick={() => handleClick('Restaurant')}>
          <Restaurant />
        </Round>
        <Round onClick={() => handleClick('Book')}>
          <Book />
        </Round>
        <Round onClick={() => handleClick('Taxi')}>
          <Taxi />
        </Round>
      </Category>
    </div>
  );
}

export default WhereToUse;
