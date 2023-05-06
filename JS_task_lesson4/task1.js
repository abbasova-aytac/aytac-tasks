let num =prompt("Please,enter a number");
let sum="";

function reverseNum (num) {
    for(let i=num.length-1;i>=0;i--){
        sum+=num [i]
}
return sum;
}
let result=reverseNum(num);
console.log (result);
