import { Console } from 'console';
import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function vowelCounter(frase:string):number{

    const vowelString:string = "aeiou"
    let counter:number=0

    for (const element of frase){
        if (vowelString.includes(element.toLowerCase())){
            counter+=1
        }
    }
    return counter
}

function consonantCounter(frase:string):number{

    const consonantString:string = "bcdfghjklmnpqrstvwxyz"
    let counter:number=0

    for (const element of frase){
        if (consonantString.includes(element.toLowerCase())){
            counter+=1
        }
    }
    return counter
}

rl.question('Ingrese una cadena de texto:', (cadena_texto) => {
    console.log(`Hay ${vowelCounter(cadena_texto)} vocales`)
    console.log(`Hay ${consonantCounter(cadena_texto)} consonantes`)
    rl.close()
});

