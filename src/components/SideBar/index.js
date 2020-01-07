import React from 'react';

import { IoIosFlash } from 'react-icons/io';
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
} from './styles';

export default function SideBar() {
  return (
    <Bar>
      <Container>
        <Profile>
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="Avatar"
          />
          <span>Nome Completo</span>
        </Profile>

        <Information>
          <div>
            <span>
              <IoIosFlash size={20} color="#FAFF00" />
              500
            </span>

            <span>
              <AiOutlinePlus size={20} color="#fff" />
              0,25%
            </span>
          </div>
          <ConfigProfile>Perfil</ConfigProfile>
        </Information>

        <Menu>
          <Item>
            <MdHistory size={50} color="#fff" />
            <span>Histórico</span>
          </Item>

          <Item>
            <MdHelpOutline size={50} color="#fff" />
            <span>Como funciona</span>
          </Item>

          <Item>
            <AiOutlineLineChart size={50} color="#fff" />
            <span>Cotação</span>
          </Item>
        </Menu>
      </Container>
    </Bar>
  );
}
