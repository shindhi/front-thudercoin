import React from 'react';


import { AiOutlinePlus, AiOutlineLineChart } from 'react-icons/ai';
import { MdHistory, MdHelpOutline } from 'react-icons/md';

import {
  Bar,
  Container,
  Information,
  Profile,
  ConfigProfile,
  Menu,
  Item,
  CoinThunder
} from './styles';

import Mititititier from '../../assets/img/retarda.png';

export default function SideBar() {
  return (
    <Bar>
      <Container>
        <Profile>
          <img
            src={Mititititier}
            alt="Avatar"
          />
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
          <Item to="/historic" >
            <MdHistory size={50} color="#fff" />
            <span>Histórico</span>
          </Item>

          <Item to="/about/how-to-use" >
            <MdHelpOutline size={50} color="#fff" />
            <span>Como funciona</span>
          </Item>

          <Item to="/quotation" >
            <AiOutlineLineChart size={50} color="#fff" />
            <span>Cotação</span>
          </Item>
        </Menu>
      </Container>
    </Bar>
  );
}
