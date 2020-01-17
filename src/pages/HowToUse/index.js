import React, { Component } from 'react';
import About from '../About';
import { Container, Round, Content, Step, Cart, Invoice, Refund, Arrow, ArrowDiv, Steps } from './styles'

class HowToUse extends Component {

  render() {

    return (

      <Container>
        <About />
        <Steps>
          <Step>
            <Round>
              <Cart />
            </Round>
            <Content>
              <span>Vá em um de nossos parceiros listados na opção Onde Usar.</span>
            </Content>
          </Step>
          <ArrowDiv>
            <Arrow />
          </ArrowDiv>
          <Step>
            <Round>
              <Invoice />
            </Round>
            <Content>
              <span>Guarde o cupom fiscal fornecido pelo estabelecimento.</span>
            </Content>
          </Step>
          <ArrowDiv>
            <Arrow />
          </ArrowDiv>
          <Step>
            <Round>
              <Refund />
            </Round>
            <Content>
              <span>Solicite o reembolso a partir do portal SOMOS e pronto, dinheiro de volta!</span>
            </Content>
          </Step>
        </Steps>
      </Container>
    )
  }
}
export default HowToUse;
