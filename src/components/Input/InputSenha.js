import React from 'react';
import './InputSenha.css';
import logo from '../../assets/img/logo-lock.svg';




function InputSenha() {
    return (
        <>
            <img className="lock" src={logo} alt='logo' />
            <div className="container4">
                <input className='input' />
            </div>
        </>
    );
}

export default InputSenha;