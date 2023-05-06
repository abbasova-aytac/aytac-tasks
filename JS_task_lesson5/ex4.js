// verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, 
// ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

// let newGmail= prompt ('daxil edin:')
// const gmail= (validation) => {
//     if (validation.length >=5){
//     return newGmail.concat("@gmail.com")
//     }
//     else{
//         return false
//     }
//  }
// let result = gmail(newGmail);
// console.log(result);












const validateGmail=(gmail)=> gmail.endswith('gmail.com')