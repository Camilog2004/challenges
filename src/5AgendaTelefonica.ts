//A dictinary is simulated by objects in javascript

const numbersAgenda: { [key: string]: string } = {};

numbersAgenda["Camilo"] = "7689"
numbersAgenda["Daniel"]= "5555"
numbersAgenda["Lucas"]= "6789"

const nameTosearch:string = "Daniel"


if(!numbersAgenda[nameTosearch]){
    console.log("Este contacto no se encuentra en la agenda")
}else{
    console.log(numbersAgenda[nameTosearch])
}




