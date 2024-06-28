const secretsDictionary : { [key:string]:string}={

    "gato":"agente",
    "rojo": "secreto",
    "hambre":"mision"
}

const initial_phrase:string="El gato rojo tiene hambre"

const list_words: string[]= initial_phrase.split(" ")

const list_words_decoded: string[]=[]

for (const element of list_words){

    if(!secretsDictionary[element]){
        list_words_decoded.push(element)
    }else{
        list_words_decoded.push(secretsDictionary[element])
    }
}

const words_decoded_joined: string= list_words_decoded.join(" ")

console.log(words_decoded_joined)

