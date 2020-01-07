import React from 'react';

import {
  IoIosFlash,
  IoIosHelpCircleOutline,
  IoMdTrendingUp,
  GiChart
} from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';

import { Container, Opcoes, Informacoes } from './styles';

import coin from '../../assets/img/coin_icon.svg';

export default function SideBar() {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="Avatar"
      />
      <Informacoes>
        <strong>Nome Completo</strong>
        <div>
          <span>
            {/* <img src={coin} alt="coin" /> */}
            <IoIosFlash size={18} color="#FAFF00" />
            500
          </span>
          <span>
            <strong>+</strong>
            0,25%
          </span>
        </div>
        <button type="button">Perfil</button>
      </Informacoes>

      <Opcoes>
        <li>
          <FaHistory size={60} />
          <span>Histórico</span>
        </li>
        <li>
          <IoIosHelpCircleOutline size={60} />
          <span>Como Funciona</span>
        </li>
        <li>
          {/* <IoMdTrendingUp size={60} /> */}

          <GiChart size={60} />
          <span>Cotação</span>
        </li>
      </Opcoes>
    </Container>
  );
}
