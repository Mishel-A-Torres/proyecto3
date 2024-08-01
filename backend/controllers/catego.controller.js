import {modelo} from '../models/catego.model.js'
export const test3 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    tipo: 'Drama'
})
