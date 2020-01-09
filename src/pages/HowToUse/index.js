import React from 'react';

// import '../HowToEarn/styleCards.css'
import About from '../About';

function HowToUse() {
  return (
    <div>
      <About />
      <div className="container">
        <div className="card">
          <h3 className="title">Como usar</h3>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
          <div className="content">
            <p>
              Escolha um dos estabelicementos parceiros do ThunderCoin,
              disponíveis na aba Onde Usar, guarde seu cupom fiscal e solicite o
              reembolso a partir da plataforma ThunderCoin!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowToUse;
