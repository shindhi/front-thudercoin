import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineLineChart } from 'react-icons/ai';
import { MdHistory, MdHelpOutline } from 'react-icons/md';

import Mititititier from '../../assets/img/retarda.png';
import {
  Bar,
  Container,
  Information,
  Profile,
  ConfigProfile,
  Menu,
  Item,
  CoinThunder,
} from './styles';

export default function SideBar() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const { pathname } = window.location;

    if (pathname.substr(1) !== '') {
      setItem(pathname.substr(1));
    } else {
      setItem('historic');
    }
  }, []);

  return (
    <Bar>
      <Container>
        <Profile>
          <img src={Mititititier} alt="Avatar" />
          <span>Mititititititititititier</span>
        </Profile>

        <Information>
          <div>
            <span>
              <CoinThunder />
              500
            </span>

            <span>
              <AiOutlinePlus size={18} color="#fff" />
              0,25%
            </span>
          </div>
          <ConfigProfile>Perfil</ConfigProfile>
        </Information>

        <Menu>
          <Item
            to="/historic"
            active={item === 'historic' && true}
            onClick={() => setItem('historic')}
          >
            <MdHistory size={50} color="#fff" />
            <span>Histórico</span>
          </Item>

          <Item
            to="/about"
            active={item === 'about' && true}
            onClick={() => setItem('about')}
          >
            <MdHelpOutline size={50} color="#fff" />
            <span>Como funciona</span>
          </Item>

          <Item
            to="/quotation"
            active={item === 'quotation' && true}
            onClick={() => setItem('quotation')}
          >
            <AiOutlineLineChart size={50} color="#fff" />
            <span>Cotação</span>
          </Item>
        </Menu>
      </Container>
    </Bar>
  );
}
