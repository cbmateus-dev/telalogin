import React from 'react';
import './InputEmail.css';
import logo from '../../assets/img/logo-email.svg';



function InputEmail() {
    return (
        <>
            <img className="email" src={logo} alt='logo' />
            <div className="container3">
                <input className='input' />
            </div>
        </>
    );
}

export default InputEmail;