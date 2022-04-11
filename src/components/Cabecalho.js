import React from 'react';
import './Cabecalho.css';
import logo from '../assets/img/logo-grab.svg';
import InputEmail from './Input/InputEmail';
import InputSubmit from './Input/InputSubmit';
import InputSenha from './Input/InputSenha';



function Cabecalho() {
    return (
        <>
            <div className="container">
                <img className ="grab" src={logo} alt='logo'/>
                <InputEmail/>
                <InputSenha/>
                <InputSubmit/>
                <div className='text'>
                    <div>Problemas para entrar?</div>
                
                <div>clique aqui</div></div>
            </div>
        </>
    );
}

export default Cabecalho;