import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const digits:string = "1234567890"

function upperChecker(contrasena:string):boolean{
    for (const element of contrasena){
        if (element !== element.toLocaleLowerCase() && (!digits.includes(element))){
            return true
        }
    }
    return false
}

function lowerChecker(contrasena:string):boolean{
    for (const element of contrasena){
        if (element === element.toLowerCase() && (!digits.includes(element))){
            return true
        }
    }
    return false
}

function numberChecker(contrasena:string):boolean{

    for (const element of contrasena){
        if (digits.includes(element)){
            return true
        }
    }
    return false

}

function contrasenaChecker(contrasena:string){

    let condition:boolean=true

    if (contrasena.length<8){
        console.log("La contraseña debe tener al menos 8 caracteres")
        condition=false
    }

    if (!upperChecker(contrasena)){
        console.log("La contraseña debe tener al menos una letra mayúscula")
        condition=false
    }

    if (!lowerChecker(contrasena)){
        console.log("La contraseña debe tener al menos una letra minúscula")
        condition=false
    }

    if (!numberChecker(contrasena)){
        console.log("La contraseña debe tener al menos un número")
        condition=false
    }

    if(condition){
        console.log("Contraseña válida")
    }
}

rl.question('Ingrese la contraseña:', (password) => {
    contrasenaChecker(password)
    rl.close()
});





