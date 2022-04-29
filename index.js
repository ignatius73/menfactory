import 'dotenv/config';
import https from 'https';
import axios from 'axios';
import path from 'path';
import  express  from "express";
import { Http2ServerRequest } from 'http2';
import { usuariosRouter } from './routes/usuarios.js';

/* var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET; */

const app = express();

//app.use(express.static('public'));
app.use(express.json());

app.get('/token',async(req, res) => {

    const resp = await axios.post('https://accounts.spotify.com/api/token',
    new URLSearchParams({'grant_type':'client_credentials'}),

    {
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
      }
    }
    
    )
        
   res.send({
     ok:true,
     token: resp.data.access_token
   });
      
    

});

app.use('/usuarios', usuariosRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando conexiones en el puerto ${process.env.PORT}`)
})