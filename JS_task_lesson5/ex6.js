// ***

// const today = new Date()
// const currentYear = today.getFullYear()
// const currentMonth=String(today.getMonth()+1).padStart(2,"0")
// const currentDay=String (today.getDay()).padStart(2,"0")
// const currentFullname = `${currentYear}-${currentMonth}-${currentDay}`

// document.write (currentFullname)

// ****

// const dateObject= new Date ();

// let date = dateObject.toUTCString ();
// console.log (date);

// *****

let date= new Date().toUTCString().slice (5,16)
document.write (date)