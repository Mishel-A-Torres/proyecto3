import {Schema, model} from 'mongoose'

const Peliesquema = new Schema({
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
export const modelo = new model('pelis', Peliesquema)