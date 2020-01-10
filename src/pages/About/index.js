import React from 'react';

import { Menu, Item, CardExibition } from './styles';

export default function About() {
  return (
    <>
      <Menu>
        <Item to="/about/how-to-use">
          <CardExibition>Como usar</CardExibition>
        </Item>
        <Item to="/about/how-to-earn">
          <CardExibition> Como ganhar </CardExibition>
        </Item>
        <Item to="/about/where-to-use">
          <CardExibition>Onde usar</CardExibition>
        </Item>
      </Menu>
    </>
  );
}
