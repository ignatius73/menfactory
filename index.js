import 'dotenv/config'
import path from 'path'
import  express  from "express";

const app = express();

app.use(express.static('public'))

app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando conexiones en el puerto ${process.env.PORT}`)
})