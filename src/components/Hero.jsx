import React from 'react';
import styles from '../styles/Hero.module.css'
import Button from "./buttons/Button.jsx";

const Hero = () => {
    return (
        <div className={styles.hero}>

            <div className={styles.hero__info}>
                <div>
                    <h2>Los mejores viajes desde Bogotá</h2>
                    <h2>al mejor precio</h2>
                </div>
                <Button
                    texto={"Conoce más"}
                />

              
            </div>

            <div className={styles.hero__image}>
                {/* <img className={styles.image1} src="https://res.cloudinary.com/estebanamazo/image/upload/v1663627315/mintic/1_jgj1nf.jpg" alt=""/> */}
            </div>
        </div>
    );
};

export default Hero;