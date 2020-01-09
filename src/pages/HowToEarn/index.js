import React from 'react';
import '../HowToEarn/styleCards.css'
import About from '../About/index'


function HowToEarn() {

    return (

        <div className="container">
            <About />
            <div className="card">
                <h3 className="title">Lecionando</h3>
                <div className="bar">
                    <div className="emptybar"></div>
                    <div className="filledbar"></div>
                </div>
                <div className="content">
                    <p>
                        Domina uma tecnologia, um idioma ou um instrumento musical?
                       Compartilhe esse conhecimento com outros invillianos e ajude-os a alcançar uma nova habilidade..
                     </p>
                </div>
            </div>
            <div className="card">
                <h3 className="title">Ajudando um remoto</h3>
                <div className="bar">
                    <div className="emptybar"></div>
                    <div className="filledbar"></div>
                </div>
                <div className="content">
                    <p>
                        Abrigue nossos funcionários remotos em sua residência quando necessitarem e receba por isso...
                    </p>
                </div>
            </div>
            <div className="card">
                <h3 className="title">Receba Good Jobs</h3>
                <div className="bar">
                    <div className="emptybar"></div>
                    <div className="filledbar"></div>
                </div>
                <div className="content">
                    <p>
                        Tenha toda a sua ajuda reconhecida por Good Jobs e receba por isso...
                    </p>
                </div>
            </div>
        </div>

    )
}

export default HowToEarn;