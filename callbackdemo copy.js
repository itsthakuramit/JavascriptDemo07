
let calc = function(num1,num2, calcType){

    if(calcType==='add')
        return num1+num2
    else if(calcType==='mul'){
        return num1 * num2;
    }
}

console.log(calc(2,2,'mul'))


let add = function(a,b){
    return a+b;
}

let mul = function(a,b){
    return a*b;
}


let newcalc = function(num1,num2,callback){
    return callback(num1,num2)
}

console.log(newcalc(2,2,mul))