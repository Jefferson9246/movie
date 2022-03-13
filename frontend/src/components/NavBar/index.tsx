import React from "react";
import {ReactComponent as GithubIcon} from 'assets/img/github.svg'; //importando a imagem utilizando ReactComponent 
import './styles.css'; //importando css sem udar react
/*
    Da para usar ../ para voltar o arquivo ou configurar o baseurl como sendo o src
*/

export default function NavBar(){
    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/Jefferson9246" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/Jefferson</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
      );
}