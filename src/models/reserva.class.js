
export class Reserva {
    nombre = ''
    correo = ''
    cedula = ''
    fecha_salida = ''
    hora = ''
    tipo = ''
    precio_total = ''


    constructor(nombre, correo, cedula, fecha_salida, hora, tipo, precio_total) {
        this.nombre = nombre;
        this.correo = correo;
        this.cedula = cedula;
        this.fecha_salida = fecha_salida;
        this.hora = hora;
        this.tipo = tipo;
        this.precio_total = precio_total;
    }
}