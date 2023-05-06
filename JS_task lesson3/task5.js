// function cem(num1,num2){
// console.log(num1+num2)
// }

// cem(12,23)

// function power (num1,num2){
//     console.log (num1**num2)
// }
// power(3,4)

// function power (num1,num2){
//     return(num1,num2)
// }
// console.log(3**4)


let number= +prompt("Enter number");
let result=checkEvenOrOdd(number);

function checkEvenOrOdd (number) {
if (number % 2 ===0 ) {
    return "This is an even number";
}
else{
    return "This is an odd number";
}

}

console.log (result)
