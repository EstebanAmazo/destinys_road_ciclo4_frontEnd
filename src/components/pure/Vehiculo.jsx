import React from 'react';
import styles from '.././../styles/Vehiculo.module.css'

const Vehiculo = ({texto, imagen, tipo}) => {
    return (
        <div className={styles.vehiculo}>

            <div className={styles.vehiculo__imagen}>
                <img src={imagen} alt=""/>
            </div>

            <div>
                <h4>{tipo}</h4>
                <p>{texto}</p>
            </div>

        </div>
    );
};

export default Vehiculo;