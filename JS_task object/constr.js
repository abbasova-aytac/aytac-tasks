// function User (name,age,nick) {
//     this.name=name
//     this.age=age
//     this.nick=nick
//     this.doing= () => {
//         console.log (`${name} is coding`)
//     }
// }

// const ali= new User ('ali',9,'alion')




// let name= prompt ('Enter your first namE:')
// let surname= prompt ('Enter your last name:')
// console.log (name.concat(" "+surname))


// let fullname= name.concat(''.concat(surname))
// console.log (fullname)





// const cumle="bu cumlede gizli soz var."
// const cumle2="bu cumlede her sey aciqdir."

// function isHidden (word) {
//     if(word.includes ("gizli")){
//     return true}
//     else {
//         return false}
// }

// const isHidden= (sentence) =>sentence.includes ("gizli") ------->  best option
// console.log(isHidden(cumle))
// console.log(isHidden(cumle2))


//  fixClassName ("green btn")
//  fixClassName2 ("green btn button")

function fixClassName (word) {
    return word.replaceAll (" ","_")
}

console.log (fixClassName("green btn"))
console.log (fixClassName("green btn button"))





