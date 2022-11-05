import React, {useEffect, useState} from 'react';
import styles from "../styles/Cotizar.module.css";
import FormReserva from "../components/pure/forms/FormReserva.jsx";
import Card from "../components/pure/Card"
import {obtenerDestinos} from "../services/axiosCRUDService.js";

const Cotizar = () => {

    const [destinos,setDestinos] = useState([])

    useEffect(() => {
        obtenerDestinos()
            .then(r => {
                setDestinos(r.data)
            })
            .catch(err => console.log(`error ${err}`))

    }, [])




    return (
        <div className="contenedor">
            {/* <h2 className={styles.heading1}>Listo para tu viaje?</h2>
            <h3 className={styles.heading2}>Viaja comodamente desde barranquilla a cualquiera de nuestros destinos, contamos con 8 ciudades disponibles y los mejores medios de transporte!</h3> */}
{/* 
            <FormReserva
                destinos={destinos}
            /> */}

            <div className='grid'>

                <Card/>
                <FormReserva/>

            </div>




        </div>
    );
};

export default Cotizar;