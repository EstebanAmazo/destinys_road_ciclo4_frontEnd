import axios from 'axios'


// obtener destinos
export const obtenerDestinos = () => {
    return axios.get("https://detinysroad.herokuapp.com/api/destinos")
}

// guardar reserva
export const guardarReserva = (idDestino, body) => {
    return axios.post(`https://detinysroad.herokuapp.com/api/destinos/${idDestino}/reservas`, body)

}
