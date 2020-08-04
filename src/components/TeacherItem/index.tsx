import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/47860925?s=460&u=c227de9f4ba27338f7df9a7c38701b9983bb8761&v=4" alt="Arthur Brito"/>
                <div>
                    <strong>Arthur Brito Medeiros</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta de recomendar coisas pros amiguinhos.
                <br /><br />
                Apaixonado por ajudar os amiguinhos
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;