// laptop obyekti yaradin. name ve price-i prompt-la verilsin. Daha sonra hemin mehsulun endirimde olmasini sorusdun (confirm) ile. Eger endirimdedirse,
//  price-in 20% qeder endirim tetbiq edilsin. Yekunda, console-a mehsulun adi ve qiymeti cixarilsin.

  

   let laptop = {};

   laptop.name = prompt("Enter laptop name:");
   
   laptop.price = Number(prompt("Enter laptop price:"));
   
   let hasDiscount = confirm("Does this laptop have a discount?");
   
   if (hasDiscount) {
     laptop.price *= 0.8;
   }
   console.log(`Laptop name: ${laptop.name}`);
   console.log(`Discounted price: ${laptop.price}`);

                                                   // ****

let laptop = {
    name: prompt("Enter laptop name"),
    price: parseFloat(prompt("Enter price of laptop")),
    discount: confirm("Does this laptop have a discount?"),
  };
  
  if (laptop.discount) {
    laptop.price *= 0.8; // Apply 20% discount
    console.log(`Price after discount: ${laptop.price}`);
  } else {
    console.log(`Price: ${laptop.price}`);
  }