function comprobarCorreo(correo:string):boolean{

    let count_arroa:number = 0

    let arroa:boolean = false
    let other_conditions:boolean = false

    for(let i=0;i<correo.length;i++){
        
        //Check if there is a dot after arroa
        if (arroa){
            //Check if there is a character after the dot
            if(correo[i]==="." && i!=correo.length-1 && correo[i+1]!=" "){
                other_conditions=true
            }
        }

        if (correo[i]==="@"){

            arroa=true

            count_arroa+=1

            //Check if the email has more than one arroa
            if (count_arroa>1){
                return false
            }

            
            //Check if the position before @ is a character
            if(correo[i-1]===" " || i==0){
                return false
            }
            
        }
    }
    if(other_conditions){
        return true
    }else{
        return false
    }
}

console.log(comprobarCorreo("camiloguti2004@gmail.com"))
console.log(comprobarCorreo("@holamoonje.com"))
console.log(comprobarCorreo("camilo20180@gmail."))
console.log(comprobarCorreo("camiloguti2004@gmail.edu.co"))
console.log(comprobarCorreo("camiloguti2004 @gmail.edu.co"))
console.log(comprobarCorreo("camil@guti2004@gmail.edu.co"))


