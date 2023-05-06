let ureyimdeki_eded= Math.floor(Math.random()*100 +1 )
let userin_ededi= +prompt ("Ededi tap ")
let count=1
while ( ureyimdeki_eded!==userin_ededi){
    count++
    if(ureyimdeki_eded > userin_ededi){
userin_ededi = +prompt("Daha boyuk ədəd daxil edin")
    }

    else {
        userin_ededi = +prompt("Daha kicik ədəd daxil edin")
    }

 }

if (count<5)
alert (`Aferin ${count} dəfəyə tapdiniz!: ${userin_ededi}`)
console.log (`${count} dəfəyə tapdiniz!: ${userin_ededi}`)
