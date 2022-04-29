import { Router } from 'express';
import Usuarios from '../usuarios.js';

export const usuariosRouter = Router();
const usuarios = new Usuarios('./personas.json');
let usuariosData = [];


usuariosRouter.get('/', async(req,res)=>{
    const usuario = {
        id:1,
        nombre:'Gabriel'
    }
    usuariosData.push(usuario);
    try {
       await usuarios.saveUser(usuariosData);
       const result = await usuarios.loadUsers();
       usuariosData = result.data
       res.send(result)
    } catch (error) {
        console.log("Error al guardar");
        res.status(500).send({msg:'Error de escritura ' + error});
    }
})


