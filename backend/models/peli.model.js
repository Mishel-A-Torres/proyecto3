import {Schema, model} from 'mongoose'

const Peliesquema = newSchema({
    titulo:{
        type: String
    }, 
    categoria: {
         type: String 
        },
        disponibilidad: { 
        type: String
    }
})
export const modelo = new model('usuarios', Peliesquema)