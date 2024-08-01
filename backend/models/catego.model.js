import {Schema, model} from 'mongoose'

export const Categoriaesquema = new Schema({
    name:{
        type: String
    }
})
export const modelo = new model('usuarios', Categoriaesquema)