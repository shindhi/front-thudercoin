import React from 'react';

import { Link } from 'react-router-dom'
import '../About/stylesLink.css'

// import { Container } from './styles';

export default function About() {
  return (
    <div className='links'>
      <Link>Como funciona | </Link>
      <Link to='/about/how-to-use'>Como usar | </Link>
      <Link to='/about/how-to-earn'>Como ganhar</Link>
    </div>
  );
}
