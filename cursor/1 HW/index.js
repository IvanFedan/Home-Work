// First task
let nameApple = 15.678;
let nameOrange = 123.965;
let namePeach = 90.2345;

// Second task
let largest = Math.max (nameApple, namePeach, nameOrange);
console.log(largest);

// 3 task
let minimum = Math.min (nameApple, namePeach, nameOrange);
console.log(minimum);

// 4 task
let sumFruits = nameApple + nameOrange + namePeach;
let sumHundreds = Math.ceil(sumFruits / 100 ) * 100;

console.log(sumFruits.toFixed(2));
console.log(sumHundreds);

// 5 Task

console.log(`${Math.floor(sumFruits) % 2 === 0 }`);

// 6 Task
console.log (500 - (nameApple + nameOrange + namePeach) );

// 7
console.log (`Avarage price: ${nameApple.toFixed(2)}, ${nameOrange.toFixed(2)}, ${namePeach.toFixed(2)} `);

// 8
 let randomSale = (Math.random() * 100);
 console.log(randomSale.toFixed(2));

 // 9

 let priceAfterDiscount = sumFruits/2;
 let valueFruits = ( priceAfterDiscount -(sumFruits * randomSale  / 100).toFixed(0));
 console.log(`${valueFruits}`);

 // 10
 console.log(
    `Максимальна ціна ${largest}
     Мінімальна ціна ${minimum}
     Сума товару ${sumFruits}
     Округлена сума ${sumHundreds}
     Випадкова знижка ${randomSale}
     Чистий прибуток ${valueFruits}
    `
 );
