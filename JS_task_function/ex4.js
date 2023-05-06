// Write a function to generate a random number

// function generateRandomNumber (start,end){
// return Math.floor(Math.random()*(end-start+1));
// }
// console.log (generateRandomNumber("80","90"))

function genRandom(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }
  console.log (genRandom("80","90"))
