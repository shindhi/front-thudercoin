import React from 'react';

import { Link } from 'react-router-dom'
import { Links } from './styles'

// import { Container } from './styles';

export default function About() {
  return (

    <Links>
      <div>
        <Link to="/about/where-to-use">Onde usar | </Link>
        <Link to="/about/how-to-earn">Como ganhar | </Link>
        <Link to="/about/how-to-use">Como usar</Link>
      </div>
    </Links>

  );
}
