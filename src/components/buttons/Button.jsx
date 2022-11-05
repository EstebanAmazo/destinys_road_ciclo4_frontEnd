import React from 'react';
import styles from '../../styles/Buttons.module.css'


const Button = ({texto}) => {
    return (
        <div>
            <button className={styles.button}>{texto}</button>
        </div>
    );
};

export default Button;