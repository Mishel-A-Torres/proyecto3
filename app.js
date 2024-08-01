import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/user.controller.js';
import {test2} from './backend/controllers/prestamo.controller.js';
import {test3} from './backend/controllers/peli.controller.js';
import {test4} from './backend/controllers/catego.controller.js';
import {test5} from './backend/controllers/autor.controller.js'

dotenv.config();

mongoose.connect(process.env.url_db)
.then(() =>{
    console.log('si funciona la conexión a la base de datos')
})
.catch((error) =>{
    console.log('no funciona la conexión a la base', error)
})

const app=express()
app.use(cors());

app.listen(4002, ()=>{
    console.log('funciona mi servidor local')
})

test()
test2()
test3()
test4()
test5()
