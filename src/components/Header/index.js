import React from 'react';
import { IoMdPower } from 'react-icons/io';

import { Top } from './styles';

export default function Header() {
  return (
    <Top>
      <div>
        <strong>Dashboard</strong>
        <IoMdPower size={20} color="#fff" />
      </div>
    </Top>
  );
}
