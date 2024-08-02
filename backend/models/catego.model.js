import {Schema, model} from 'mongoose'

const Categoriaesquema = new Schema({
    tipo:{
        type: String
    }
})
export const modelo = new model('categorías', Categoriaesquema)