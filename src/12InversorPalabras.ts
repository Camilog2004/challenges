import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function wordsReversor(phrase:string):string{

    const list_phrase:string[]= phrase.split(" ")

    const list_phrase_reversed:string[]=[]

    for (const element of list_phrase){
        const new_element:string = element.split("").reverse().join("")
        list_phrase_reversed.push(new_element)
    }
    
    return list_phrase_reversed.join(" ")
}

rl.question('Ingrese su palabra:', (user_word) => {

    console.log(wordsReversor(user_word))
    rl.close()


});

