// Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin. 
// Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)

let age = +prompt ("Enter your age")
let life =77;

function whenYouWilldie () {
    if (age===77) {
        return "You are about to die"
    }
    else {
        let hesabla = (life -= age)
    return hesabla
    }

}
console.log (whenYouWilldie())