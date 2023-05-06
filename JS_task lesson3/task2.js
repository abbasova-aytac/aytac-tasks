

let pin = 1234;
let balance = 500;
let tries = 0;

while( tries < 3) {
  let userpin= +prompt("Please,enter pin code");

    if(userpin === pin) {
       let userbalance = parseInt(prompt("Please,enter amount"))
        if(userbalance<=balance){
           let newbalance=balance-userbalance
            alert ('Transformation is successful.Your balance is ' + newbalance);
            break
        }
        else {
            alert("In your balace doesn't have this amount. Please,enter a lower amount.")
        }

    } 



        else{
        tries++;
        alert("Incorrect password "+ (3- tries) + "remaining.")
    }
}
if (tries===3){
    alert("Account blocked");}
    
  //     else if(userpin !== pin && tries <3) {
    //         alert('You entered wrong pin code. Please tyr again!')
    //     }
        
    //      else {
    //         alert('You entered wrong pin code 3 times. Your card is blocked!')
    //     }
    //     tries++;
 
    // }
