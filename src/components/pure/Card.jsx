import React from 'react';
import styles from '../../styles/Card.module.css'

const Card = () => {
    return (
        <div className="contenedor-card">
            <div className="card-panel">
                <h1>Hola!</h1>
                <h3>Viaja desde Bogotá a cualquiera de nuestros destinos disponibles</h3>
                <p>Llena los campos y obten una cotizacion inmediata</p>
            </div>
        </div>
    );
};

export default Card;