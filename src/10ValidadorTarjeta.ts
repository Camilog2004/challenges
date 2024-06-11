function numbertoArray(number:number):number[]{
    //change the number to string and get the number
    const numberasString:string[]= number.toString().split("")

    const arraynumbers:number[]=[]

    for(let i=0; i<numberasString.length;i++){

        arraynumbers.push(parseInt(numberasString[i]))

    }
    return arraynumbers
    
}

function luhnAlghoritm(number:number):boolean{

    const arraynumbers:number[]=numbertoArray(number)

    const array_length:number=arraynumbers.length

    for(let i=array_length-2;i>=0;i-=2){
        let number_changed:number = arraynumbers[i]*2

        if (number_changed>9){
            number_changed= number_changed-9
        }

        arraynumbers[i]=number_changed
    }

    //Check the sum in the array
    let sum_array:number=0

    for(let j=0; j<array_length;j++){
        sum_array+=arraynumbers[j]
    }

    return sum_array%10===0

}

console.log(luhnAlghoritm(4532015112830366))
console.log(luhnAlghoritm(6011514433546201))
console.log(luhnAlghoritm(378282246310005))

console.log(luhnAlghoritm(6011514433546202))
console.log(luhnAlghoritm(371449635398432))


