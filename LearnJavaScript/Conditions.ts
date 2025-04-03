let condition:number = 9000

if(typeof(condition) === "string"){


    console.log("conditon matched")
}
else{

    console.log("Didnot matched")
}


//While loop
let pole:number = 15 
let i =1

while(pole>=5){

    console.log("Less than pole")
    i++
    pole -= i
    console.log(pole+"----")
}

const numx:boolean = true

if(!numx){

console.log("Const value changed")
}
else{
console.log("cant changed value of const")
}

//for loop

let forloop:number = 10
let values:number=1

for(values; forloop>=values;values++){

console.log("current number is"+values )

}