import { open, readFile, writeFile } from "fs/promises";


class Usuarios{

    constructor(url = '../usuarios.json' ){
        this.url = url
        this.creaFile()

    }

    async creaFile(){
        try {
            const file = await open(this.url,'a')
            file.close()
        } catch (error) {
            console.log('Ocurrió un error')
        }
    }

    async loadUsers(){
            this.creaFile();
            const users = await readFile(this.url);
            console.log(users)
            return {ok:true, data:users.toString()}
            
    }

    async saveUser(usuarios){
        this.creaFile();
        try {
           await writeFile(this.url, JSON.stringify(usuarios)) 
           return {ok:true, msg:'Usuario guardado correctamente'}
        } catch (error) {
            console.log(error)
        }

    }

}

export default Usuarios