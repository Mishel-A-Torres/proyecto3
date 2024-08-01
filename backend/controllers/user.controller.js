import {modelo} from '../models/user.model.js'
export const test = () => {
    console.log('si funciona la conexión entre el controlador y el proyecto')
}

modelo.create({
    name: 'Mishel',
    email: 'paw patr/ol la película',
    contraseña: '012345678'
})
