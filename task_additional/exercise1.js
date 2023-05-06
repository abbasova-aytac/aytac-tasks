// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. E
// ssentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

let numbers = 42145
let num=numbers.toString().split("")
let sortednumbers= num.sort((a,b)=> b-a);

console.log(sortednumbers);

