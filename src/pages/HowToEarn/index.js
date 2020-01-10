import React from "react";
import About from "../About";
import { Container, Card, Title, Bar, EmptyBar, Content } from "../HowToEarn/styles"

function HowToEarn() {

    return (
        <>
            <About />
            <Container>
                <Card>
                    <Title>
                        Lecionando
                    </Title>
                    <Bar>
                        <EmptyBar></EmptyBar>
                    </Bar>
                    <Content>
                        Domina uma tecnologia, um idioma ou um instrumento musical?
                        Compartilhe esse conhecimento com outros invillianos e ajude-os a alcançar uma nova habilidade..
                    </Content>
                </Card>
                <Card>
                    <Title>
                        Ajudando um remoto
                    </Title>
                    <Bar>
                        <EmptyBar></EmptyBar>
                    </Bar>
                    <Content>
                        Abrigue nossos funcionários remotos em sua residência quando necessitarem e receba por isso...
                    </Content>
                </Card>
                <Card>
                    <Title>
                        Recebendo Good Jobs
                    </Title>
                    <Bar>
                        <EmptyBar></EmptyBar>
                    </Bar>
                    <Content>
                        Tenha toda a sua ajuda reconhecida por Good Jobs e receba por isso...
                    </Content>
                </Card>


            </Container>
        </>
    )
}

export default HowToEarn;