import {modelo} from '../models/peli.model.js'
export const test2 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    titulo: 'Caza fantasmas',
    categoria: 'terror',
    disponibilidad: 'nula'
})
