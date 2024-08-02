import {modelo} from '../models/peli.model.js'
export const test3 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    titulo: 'Caza fantasmas',
    categoria: 'terror',
    disponibilidad: 'nula'
})
