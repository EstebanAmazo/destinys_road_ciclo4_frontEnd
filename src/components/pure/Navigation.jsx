import React from 'react';
import styles from '../../styles/Navigation.module.css'
import {Link} from "react-router-dom";

    

const Navigation = () => {
    return (
        <div>

            <nav className={`${styles.navigation} contenedor`}>

                <Link to='/'>
                    <div className={styles.logo}>
                        <img src="https://res.cloudinary.com/estebanamazo/image/upload/v1667009184/ciclo4/Mesa_de_trabajo_15_4x-8_t2lia3.png" alt="" />
                    </div>
                </Link>


                <div className={styles.enlaces}>
                    <a href="#destinos">Destinos</a>
                    <a href="#vehiculos">Vehiculos</a>
                    <a href="#cotizar">Cotizar</a>
                </div>
            </nav>


        </div>
    );
};

export default Navigation;