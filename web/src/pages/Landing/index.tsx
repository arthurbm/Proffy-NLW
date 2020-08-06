import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    // Recebe uma função e um array de dependências, que basicamnete diz quando voce quer disparar a funcao
    // (As informações que quando forem alteradas vão disparar a função)
    // Se você quer que a função execute apenas uma única vez, apenas quando o componente for colocado em tela, deixe o array vazio
     useEffect(() => {
         api.get('/connections').then(response => {
             //Podia ser assim:
             //const total = response.data.total;
             const { total } = response.data;

             setTotalConnections(total);
         })
     }, )

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt=""/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt=""/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing