import {Schema, model} from 'mongoose'

const Usuarioesquema = new Schema({
    name:{
        type: String
    }, 
    email:{
         type: String 
        },
    contraseña: { 
        type: String
    }
})
export const modelo = new model('usuarios', Usuarioesquema)