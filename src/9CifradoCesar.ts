function cifradoCesar(mensaje:string, desplz:number):string{

    const alphabet:string = "abcdefghijklmnopqrstuvwxyz"
    
    let mensaje_cifrado:string="" 

    for(let i=0; i<mensaje.length;i++){

        if(alphabet.includes(mensaje[i])){

            let indice:number= alphabet.indexOf(mensaje[i])

            indice=indice+desplz
    
            indice=indice%(alphabet.length)
        
            mensaje_cifrado+=alphabet[indice]
        }
        else{
            mensaje_cifrado+=mensaje[i]
        }
    }
    return mensaje_cifrado
    
}

console.log(cifradoCesar("zapaterox",3))
console.log(cifradoCesar("wory_ola",3))