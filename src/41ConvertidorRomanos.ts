function enterotoRomano(entero:number):string{

    const tabla_base: (string | number)[][]=[
        ["I",1],["IV",4],["V",5],["IX",9],["X",10],
        ["XL",40],["L",50],["XC",90],["C",100],["CD",400],
        ["D",500],["CM",900],["M",1000]
    ]

    let romano:string=""

    for (let i=tabla_base.length-1;i>=0;i--){

        //as allows you manage the variable how you want
        const simbolo = tabla_base[i][0] as string
        const numero =tabla_base [i][1] as number

        if (Math.floor(entero/numero)){
            const multiplicador= Math.floor(entero/numero)

            
            for (let j=0; j<multiplicador;j++){
                romano+=simbolo
            }

            entero=entero%numero
        }
    }

    return romano

}

function convertidorFecha(fecha:string):string{

    const splitFecha:string[]= fecha.split("-")

    let fechaRomana:string=""

    for (let i=0;i<splitFecha.length-1;i++){

        fechaRomana+=enterotoRomano(parseInt(splitFecha[i]))+"-"
    }

    //this is for no add the last one "-"
    fechaRomana+=enterotoRomano(parseInt(splitFecha[splitFecha.length-1]))

    return fechaRomana
}

console.log(convertidorFecha("01-01-2021"))
console.log(convertidorFecha("15-05-1998"))