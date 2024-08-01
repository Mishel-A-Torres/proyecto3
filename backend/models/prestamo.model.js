import {Schema, model} from 'mongoose'

const Prestamoesquema = new Schema({
    usuario: {
        type: String
    },
    pelicula: {
        type: String
    },
    fechaPrestamo: {
        type: Date 
    },
    fechaDevolucion: {
        type: Date 
    }
})
export const modelo = new model('usuarios', Prestamoesquema)