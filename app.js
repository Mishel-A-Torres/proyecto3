import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/user.controller.js';
import {test2} from './backend/controllers/admin.controller.js'

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