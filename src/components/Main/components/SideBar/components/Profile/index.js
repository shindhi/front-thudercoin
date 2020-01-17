import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Mititititier from '../../../../../../assets/img/retarda.png';
import { BasicInfo, Information, CoinThunder, ConfigProfile } from './styles';

export default function Profile() {
  return (
    <>
      <BasicInfo>
        <img src={Mititititier} alt="Avatar" />
        <span>Mititititititititititier</span>
      </BasicInfo>

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
    </>
  );
}
