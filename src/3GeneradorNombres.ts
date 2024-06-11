import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese un nombre:", (name) => {

    rl.question("Ingrese un apellido:",(surname)=>{

        //Slice of name
        let subname:string

        if(name.length<3){
            subname= name.slice(0)
        }else{
            subname=name.slice(0,3)
        }

        //Slice of surname
        let subsurname:string

        if(surname.length<3){
            subsurname=surname.slice(0)
        }else{
            subsurname=surname.slice(0,3)
        }

        //Generate a random number

        let randomNumber: number =Math.random()
        randomNumber = Math.floor(randomNumber * 10);

        //Create the username

        const username:string= subname+subsurname+randomNumber.toString()

        console.log("Su nombre de usuario es:",username)
        rl.close()

    })
});