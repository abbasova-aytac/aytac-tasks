// Reverse a number

let sum=""
function reverseNum (num) {
    for(let i=num.length-1;i>=0;i--){
   sum+=num[i]
    }
   return sum
}

console.log(reverseNum("5689"))