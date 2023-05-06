// 1. Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox. 

const today= new Date()
const onlydate=today.getDay()

function dateofLesson (onlydate) {

if (onlydate===6||onlydate===7) {
    alert("Bu gun ders gunu deyil.")
}
else {
    alert ("Bu gun ders var.")
}
}
console.log (dateofLesson())