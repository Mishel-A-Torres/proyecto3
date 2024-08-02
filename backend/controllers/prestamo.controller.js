import {modelo} from '../models/prestamo.model.js'
export const test2 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    usuario: 'Mishel',
    pelicula: 'paw patr/ol la película',
    fechaPrestamo: '01/08/2024',
    fechaDevolucion: '01/08/2028'
})
