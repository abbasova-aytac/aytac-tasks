//*1. İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

// let inputNum = prompt("İkirəqəmli bir ədəd daxil edin:");
// let num = parseInt(inputNum);
// num += 7;

// while (num.toString().length < 3) {
//   num += 7;
// }

// console.log("Nəticə: " + num);



   //  ***********

//  2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// // Proqram N ədədini istifadəçidən soruşur.

// let N = +prompt ("Neçə dəfə console-a çıxarmaq istəyirsən?")

// for (
//   let i=1;i<=N;i++) {
//     console.log ("I know how to use cycles");
//   }



     //  ***********

    //  Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

//   function sumOfAllOddNumbers(num) {
//   let sum = 0;

//   for (let i = 11; i <=num; i += 2) {
//     sum += i;
//   }
//  return sum;
// }

// let result = sumOfAllOddNumbers(99);

// console.log(result)


    //  ***********

// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.

  // function isLucky(num) {
  // let sum= [];

  // for(let i=0; i<num.length;i++){
  //   sum.push(num[i]);
  // }
  // let sum1=parseInt(sum[0])+parseInt(sum[1])+parseInt(sum[2]);
  // let sum2=parseInt(sum[3])+parseInt(sum[4])+parseInt(sum[5]);
  // if (sum1==sum2){
  //   return ("This is a lucky ticket!")
  // } 
  // else {
  //   return("This is not a lucky ticket!");
  // }
  // }
  // let num ='123321';
  // // let num = '123678';
  // let result = isLucky(num);
  // console.log(result);



     //  ***********
    //  5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv formatda dəyər daxil edərsə, 
    //  «Yanlış dəyər daxil edilib» bildirişi göstərin.
    let date=prompt("Enter the date YYYY.MM.DD: ");

    let sum=[];
    
    let year="";
    let month="";
    let day="";
    
    let final_date="";
    
    
    for(let i=0; i<date.length; i++){
    
    sum.push(date[i]);
    year=sum[0]+sum[1]+sum[2]+sum[3];
    month=sum[5]+sum[6];
    day=sum[8]+sum[9];
      
    switch (month){
      case "01":
        month="January";
        break;
      case "02":
        month="February";
        break;
        
      case "03":
        month="March";
        break;
        
      case "04":
        month="April";
      break;
        
      case "05":
        month="May";
        break;
    
      case "06":
        month="June";
        break;
    
      case "07":
        month="July";
        break;
      
      case "08":
        month="August";
        break;
    
      case "09":
        month="September";
        break;
    
      case "10":
        month="October";
        break;
    
      case "11":
        month="November";
        break;
      
      case "12":
        month="December";
        break;
    }
    
      final_date=(day+ " " +month+" "+year);
      
    }
    console.log(final_date);
  

    
// ***********
// 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.

