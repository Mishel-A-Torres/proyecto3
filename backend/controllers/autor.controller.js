import {modelo} from '../models/autor.model.js'
export const test5 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    name: 'Sofía Cópola',
    nacionalidad: 'Americana'
})
