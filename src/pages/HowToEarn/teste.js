import React from 'react';
import '../HowToEarn/teste.css'
function TesteCard() {

    return (

        <div className="container">
            <div className="card">
                <h3 className="title">Lecionando</h3>
                <div className="bar">
                    <div className="emptybar"></div>
                    <div className="filledbar"></div>
                </div>
                <div className="circle">
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
                <div className="circle">
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
                <div className="circle">
                    <p>
                        Tenha toda a sua ajuda reconhecida por Good Jobs e receba por isso...
                    </p>
                </div>
            </div>
            {/* <div className="card">
                <h3 className="title">Card 4</h3>
                <div className="bar">
                    <div className="emptybar"></div>
                    <div className="filledbar"></div>
                </div>
                <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50" />
                    </svg>
                </div>
            </div> */}
        </div>

    )
}

export default TesteCard;