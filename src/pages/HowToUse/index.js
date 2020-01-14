import React from 'react';

import About from '../About';
import {
  Container,
  CardContainer,
  UseCard,
  Title,
  Bar,
  EmptyBar,
  Content,
} from '../HowToEarn/styles';

function HowToUse() {
  return (
    <>
      <Container>
      <About />
        <CardContainer>
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
        </CardContainer>
      </Container>
    </>
  );
}
export default HowToUse;
