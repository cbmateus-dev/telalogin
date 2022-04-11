import React from 'react';
import './Cabecalho2.css';
import img from '../assets/img/right-image.png';



function Cabecalho2() {
    return (
        <>
            <div className="container2">
            <img className ="grab" src={img} alt='logo'/>
            </div>
        </>
    );
}

export default Cabecalho2;