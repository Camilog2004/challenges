import * as readline from 'readline'

//Create interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese una temperatura en celsius:", (celsius) => {

    rl.question("Ingrese una temperatura en fahrenheit:",(fahrenheit)=>{

        //Change celsuis and fahrenheit from string to number
        const celsiusasNumber:number =parseFloat(celsius)
        const fahrenheitasNumber:number=parseFloat(fahrenheit)
        
        let temperaturaFahrenheit:number= celsiusasNumber*9/5+32
        let temperaturaCelcuis:number= (fahrenheitasNumber-32)*5/9

        console.log(`${celsiusasNumber} celsius son ${temperaturaFahrenheit} fahrenheit`)
        console.log(`${fahrenheitasNumber} fahrenheit son ${temperaturaCelcuis} celsuis`)
        rl.close()

    })
});