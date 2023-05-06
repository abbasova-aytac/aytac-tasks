// function translateLang (language){
//     switch (language){
//     case "en":
//      return "Welcomme"
//     case "az":
//     return "Xosh gelmisiz"
//     }

// }
// console.log (translateLang ("az"))










// let laptop = {
//     name:"Asus",
//     price:1500,
//     owner: "Aytaj",
//     ownerCountry :{
//     name :"Azerbaijan",
//     capital: "Baku"
//     },
// }

// // laptop.price-= 200
// // console.log(laptop)

// for(let key in laptop) {
//     // console.log(laptop.key)
//     console.log(laptop[key])
// }


sum=0
let salaries = {
    John: 100,
    Ann :160,
    Peter:130
}
for(let key in salaries){
 sum+=salaries[key]
 console.log(sum)
 
}