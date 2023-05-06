// propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin. Mes: 

// propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent') // 'Asia'
// propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  // 'Sweden'
// propertyTaker({name:'ali', age:12}, 'name')  // 'ali'

// **** first option

// function proprtyTaker (object,proprtyName){

//     console.log (object[proprtyName])
   
// }
// proprtyTaker({  continent: 'Asia',  country: 'Japan'},'continent')



// **** second option (with another example)

 const taker = {
    name: ' Aytac',
    age: 24,
    countyr: 'Azerbaijan'
 }

 function proprtyTaker (value) {
    return value
}

 let result = proprtyTaker(taker.age)
 console.log(result)


