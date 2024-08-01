import {Schema, model} from 'mongoose'

const Autoresquema = newSchema({
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
export const modelo = new model('usuarios', Autoresquema)