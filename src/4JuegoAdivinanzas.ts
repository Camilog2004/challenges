//Generate a random number between 1 and 10

let randomNumber:number = Math.random()
randomNumber= Math.floor(randomNumber*10)+1

let choise:number= 8

for (let i=0;i<3;i++){
    if (choise===randomNumber){
        console.log("Felicitaciones, ganaste")
        break
    }else if(choise>randomNumber){
        console.log("La suposición es demasiado alta")
    }else if(choise<randomNumber){
        console.log("La suposición es demasiado baja")
    }

    if (i===2){
        console.log("Perdiste, el número era:",randomNumber)
    }
}

