import React from "react";
import '../HowToEarn/styleEarn.css';

function HowToEarn() {


    return (
        <div className='container'>
            <div className='card card-1' id="card-1">
                <a href='#card-3'> Voltar</a>
                <h1>Lecionando</h1>
                <p>
                    Domina uma tecnologia, um idioma ou um instrumento musical?
                    Compartilhe esse conhecimento com outros invillianos e ajude-os a alcançar uma nova habilidade...
                </p>
                <a href='#card-2'> Avançar </a>

            </div>
            <div className='card card-2' id='card-2'>
                <a href='#card-1'> Voltar</a>
                <h1>Ajudando um remoto</h1>
                <p>
                    Abrigue nossos funcionários remotos em sua residência quando necessitarem e receba por isso...
                </p>
                <a href='#card-3'> Avançar</a>
            </div>
            <div className='card card-3' id='card-3'>
                <a href='#card-2'> Voltar</a>
                <h1>Recebendo Good Jobs</h1>
                <p>
                    Tenha toda a sua ajuda reconhecida por Good Jobs e receba por isso...
                </p>
                <a href='#card-1'> Avançar </a>
            </div>
        </div>
    )
}
window.location = "#card-1"

export default HowToEarn;
