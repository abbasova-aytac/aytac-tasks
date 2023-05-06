// *ADVANCED* Bu gun heftenin hansi gunudur, onun adini avtomatik document-e yazin. (obyektlerden istifade ede bilersiniz)
const days= [
"Bazar",
"Bazar ertesi",
"Cershenbe axsami",
"Chersenbe",
"Cume axsami",
"Cume",
"Shenbe"
]
const today=new Date()
const currentDay=  days[today.getDay()]
document.write(currentDay);
