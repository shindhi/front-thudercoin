import React, { Component } from 'react'
import axios from '../../utils/httpClient'
import About from '../About'
import { Container, Cards, Card, Title, Content } from './styles';

class HowToEarn extends Component {

  state = {
    origins: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("/origins/filter/earn-expend?earn=TRUE&expend=FALSE");
    this.setState({ origins: data })
  }

  render() {
    const { origins } = this.state;

    if (origins.length !== 0) {

      return (
        <Container>
          <About />
          <Cards>
            {origins.map(origin => {
              if (origin.status === 'ACTIVE') {
                return <div key={origin.id}>
                  <Card>
                    <Title>{origin.name}</Title>
                    <Content>
                      <span>{origin.description}</span>
                    </Content>
                  </Card>
                </div>
              }
            })}
          </Cards>
        </Container>
      );
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default HowToEarn;
