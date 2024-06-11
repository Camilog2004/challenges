import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese su peso(en kilogramos):', (weight) => {

    rl.question("Ingrese su altura(en metros):",(height)=>{

        //Change weight and height from string to number
        const weightasNumber=parseFloat(weight)
        const heightasNumber=parseFloat(height)
        let bmi:number= weightasNumber/(heightasNumber)**2

        console.log("Su BMI es:",bmi)

        //Interprate BMI

        if (bmi < 18.5){
            console.log("Tiene bajo peso")
        }else if(bmi >= 18.5 && bmi <= 24.9){
            console.log("Tiene peso normal")
        }else if (bmi>= 25 && bmi<= 29.9){
            console.log("Tiene sobrepeso")
        }else{
            console.log("Tiene obesidad")
        }
        rl.close()

    })
});