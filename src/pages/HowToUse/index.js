import React from 'react';

import About from '../About';
import {
  Container,
  UseCard,
  Title,
  Bar,
  EmptyBar,
  Content,
} from '../HowToEarn/styles';

function HowToUse() {
  return (
    <>
      <About />
      <Container>
        <UseCard>
          <Title>Como usar</Title>
          <Bar>
            <EmptyBar />
          </Bar>
          <Content>
            Escolha um dos estabelicementos parceiros do ThunderCoin,
            disponíveis na aba Onde Usar, guarde seu cupom fiscal e solicite o
            reembolso a partir da plataforma ThunderCoin!
          </Content>
        </UseCard>
      </Container>
    </>
  );
}
export default HowToUse;
