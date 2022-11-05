import React from 'react';
import styles from '../styles/Main.module.css'
import Vehiculo from "./pure/Vehiculo.jsx";
import Button from "./buttons/Button.jsx";
import {Link, BrowserRouter, Route, Routes, Router} from 'react-router-dom'
import Cotizar from "../pages/Cotizar.jsx";
import {obtenerDestinos} from "../services/axiosCRUDService.js";




const Main = () => {

    return (


            <main>

                <div className={styles.destinos} id="destinos">
                    <h2 className={styles.heading1}>Destinos más buscados cerca de Bogotá</h2>
                    <h3 className={styles.heading2}>Puedes visitar una extensa variedad de joyas del caribe y comenzar a planificar tus esperadas vacaciones ahora. Encontrarás gran variedad de sitios, playas, artesanías y mucha cultura.</h3>
                    <div className={styles.grid}>
                       
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            <div className={styles.contenedor_imagenes}></div>
                            

                    </div>
                </div>

                <div id='vehiculos'>
                    <h2 className={styles.heading1__vehiculos}>La mejor comodidad para tus viajes</h2>
                    <h3 className={styles.heading2__vehiculos}>Estos son los coches perfectos para tus viajes, agradables para toda la familia o un grupo de amigos.</h3>

                    <div className={styles.grid__vehiculos}>
                        <Vehiculo
                            tipo={"Chevrolet Onix LTZ AT 2018"}
                            texto={"Es un auto compacto con transmisión automática que ofrece gran comodidad, con un buen espacio interior, 5 puertas, aire acondicionado y tecnología Bluetooth."}
                            imagen={"https://3.bp.blogspot.com/-n8eiROzgG9k/Wq14Ym-bmKI/AAAAAAAAXWM/pYv0nu-OThM-jZyHTtHKn88anQxKbegBwCLcBGAs/s1600/Ficha-Tecnica-Chevrolet-Onix.jpg"}

                        />

                        <Vehiculo
                            tipo={"Renault Master"}
                            texto={"Esta camioneta fabricada en Francia, destaca por su desempeño y motor Diesel, apta para familias numerosas o grupos de amigos por su capacidad hasta de 13 personas, buena apariencia y buen manejo por su altura."}
                            imagen={"https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/renault-master-2023.jpg"}
                        />

                    </div>


                    <div className={styles.reserva} id='cotizar'>
                        <h2>Realiza una cotizacion en instantes</h2>

                        <Link to="/cotizar">
                            <Button
                                texto={"Cotizar"}
                            />
                        </Link>

                    </div>
                </div>
            </main>
    );
};

export default Main;