import { Console } from 'console';
import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function palindromoChecker(palabra:string):boolean{

    let pointer_start:number=0
    let pointer_end:number=palabra.length-1

    while (pointer_start<pointer_end){

        if (palabra[pointer_start]===" "){
            pointer_start+=1
        }

        if (palabra[pointer_end]===" "){
            pointer_end-=1
        }

        if (palabra[pointer_start].toLowerCase() != palabra[pointer_end].toLowerCase()){
            return false
        }
        pointer_start+=1
        pointer_end-=1
    }
    return true
}

rl.question('Ingrese una frase:', (palindromo) => {
    
    if(palindromoChecker(palindromo)){
        console.log("Es un palindromo")
    }else{
        console.log("No es un palindromo")
    }

    rl.close()
});
