import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese su nombre:', (usuario_nombre) => {

    rl.question("Ingrese su superheroe favorito:",(superheroe)=>{
        
        const superheroe_uppercase:string=superheroe[0].toUpperCase()+superheroe.slice(1) 
        console.log(superheroe_uppercase,usuario_nombre)
        rl.close()

    })
});