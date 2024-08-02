import {Schema, model} from 'mongoose'

const Autoresquema = new Schema({
    name:{
        type: String
    }, 
    nacionalidad:{
         type: String 
        },
    peliculas: { 
        type: String
    }
})
export const modelo = new model('autores', Autoresquema)