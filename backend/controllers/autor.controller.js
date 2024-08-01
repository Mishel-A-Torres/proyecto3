import {modelo} from '../models/autor.model.js'
export const test4 = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    name: 'Sofía Cópola',
    nacionalidad: 'Americana'
})
