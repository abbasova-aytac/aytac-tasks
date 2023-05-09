// 1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun. 

//  const massive = new Array (5)
//  const b= prompt(" ")
//  console.log (massive)
//  for( let i=0; i<massive.length;i++){
//     const b= prompt("Enter a number ")
//     massive[i]=b
//  }
//  console.log (massive)

//  2.Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin. 

// function allOfNumbersMultiply (...array) {
// let multi =1
// for (let i=0;i<array.length;i++){
// multi*=array[i]}

// return multi
// }
// console.log (allOfNumbersMultiply(5,3,4))

// 3. multiply(a,b,c) funksiyasi yaradin. 
// Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.

// function multiply (...argms){
//     let result=1;
//     for (let i=0;i<argms.length;i++){
//         result*=argms[i];
//     }
//     return result
// }

// console.log(multiply(1,2,4,3,5));

// 4. convertElementsToItsLengths(arr) -> stringlerden ibaret array alir. 
// Geriye elementlerin uzunluqlarindan ibaret massiv qaytarir.
    
//     function convertElementsToItsLengths(...arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(arr[i].length);
//     }
  
//     return result;
//   }
//   console.log (convertElementsToItsLengths("apple", "banana", "orange"))

// 5. findMax(arr) -> arraydaki en boyuk ededi geri qaytarir.

//     function findMax(...arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }

//   console.log (findMax(10,20,60,40,0))

//6. findLongest(arr) -> arraydaki en uzun stringi geri qaytarir.
    
//     function findLongest (...arr) {
//     let maxlength = 0
//     let longestString = '';
//     for (let i=0;i<arr.length;i++) {
//         if (arr[i].length>maxlength){
//             maxlength= arr[i].length;
//             longestString=arr [i];
//         }
//     }
//     return longestString;
// }
// console.log (findLongest("hello","Norway","May"))
  

// 7. Mesaj obyektlərindən ibarət massiv yaradın. Obyektin {sender, receiver, hasRead} fieldları var.
// 5 element əlavə edin. Funksiya yaradın ki, ancaq oxunanları geri qaytarsın. (hasReadi true olanları)


//     function getReadMessages(...messages) {
//     return messages.filter(message => message.hasRead);
//   }
  
//   console.log(getReadMessages( { sender: 'Aytac', receiver: 'Sona', hasRead: true },
//       { sender: 'Sona', receiver: 'Cavid', hasRead: false },
//       { sender: 'Banu', receiver: 'Ulviyya', hasRead: true },
//       { sender: 'Ali', receiver: 'Aydan', hasRead: false },
//       { sender: 'Mehemmed', receiver: 'Madina', hasRead: true },));

// 8.Write a JavaScript function to clone an array.

// function cloneArray(arr) {
//   return arr.slice();
// }

// const originalArray = [1, 2, 3, 4, 5];
// const clonedArray = cloneArray(originalArray);

// console.log(clonedArray);


//9.Write a function that converts an array of values from miles to kilometres. 
    
// function milesToKilometers(milesArray) {
//     const kilometersArray = [];
//     for (let i = 0; i < milesArray.length; i++) {
//       kilometersArray[i] = milesArray[i] * 1.60934;
//     }
//     return kilometersArray;
//   }
  
//   const miles = [10, 20, 30, 40, 50];
//   const kilometers = milesToKilometers(miles);
  
//   console.log(kilometers); 


//   10. Funksiya yaradın ki, verdiyimiz massivdəki cüt ədədlərdən ibarət 
//   yeni massiv yaradib geri qaytarsın. 

// function getBackEvenNumber (...arr) {
//   const result= [];
//   for (let i=0;i<arr.length;i++) {
//     if (arr[i]%2===0){
//         result.push(arr[i]);
//     }
//      }
//      return result
//     }
// console.log (getBackEvenNumber(1,2,3,4,5,6,7,8,9,10,11,12))

// 11.Funksiya yaradın ki, əlifba sırasındakı yerini verim hərfi geri qaytarsın.
// (Elifba massivi yaradın. 26 hərf olsun. ) 1-a, 26-z və s.

function numberOfLetter (letter) {
let alphabe= "abcdefghjklmnopqrstuvwxyz";
let index= alphabe.indexOf(letter.toLowerCase())+1;
return index
}
 console.log (numberOfLetter("C"))