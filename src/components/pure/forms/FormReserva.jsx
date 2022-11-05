import React from 'react';
import { Formik, Field, Form } from "formik";
import styles from '../../../styles/Formulario.module.css'

const FormReserva = () => {
    return (
        <div className= {`${styles.formulario}`}>
            <h1>Realizar Reserva</h1>
            <Formik
                initialValues={{}}
                validationSchema={{}}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                }}

            >
                {({
                    values,
                }) => (
                    <Form>
                        <label htmlFor="name">Nombre</label>
                        <Field className={`${styles.campo}`} id="name" type="text" name="name" placeholder="Tu nombre completo" />

                        <label htmlFor="email">Correo electrónico</label>
                        <Field className={`${styles.campo}`} id="email" type="email" name="email"
                            placeholder="Ej: ejemplo@correo.com" />


                        <label htmlFor="id">N° de documento</label>
                        <Field className={`${styles.campo}`} id="id" type="number" name="id" placeholder="Ej: 12345678" />

                        <label>Destino</label>
                        <Field
                            as="select"
                            name={"destino"}
                        >

                            <option className={`${styles.seleccionDestino}`} value="--seleccione un destino--" label="-- Seleccione un destino -- ">
                                Seleccione un destino
                            </option>

                            <option className="seleccion-destino" value="1" label="Zipaquirá"></option>
                            <option className="seleccion-destino" value="2" label="Chicaque"></option>

                        </Field>


                        <div className="tipo">

                            <div className={`${styles.tipo__radio}`}>
                                <label>Tipo: </label>

                                <label className={`${styles.tipo}`}>
                                    <Field type="radio" name="tipo" value="Carro"

                                    />
                                    Carro
                                </label>
                                <label className={`${styles.tipo}`}>
                                    <Field type="radio" name="tipo" value="Van"
                                    />
                                    Van
                                </label>
                            </div>
                            
                        </div>

                        <button className={`${styles.btn}`} type="submit">Realizar Reserva</button>

                        <div className="footer">
                            <div className="spinner">

                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormReserva;