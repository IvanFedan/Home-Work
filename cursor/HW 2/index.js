let firstNumber = parseInt (prompt (`Введіть число(N) від якого ми будемо складати`), 10);
while (isNaN (firstNumber)) {
    firstNumber = parseInt (prompt (`Введіть будь-яке ціле число `, 10),  10)
};
console.log(`Число N рівне: ${firstNumber}`);

let secondNumber = parseInt (prompt (`Введіть число(M) від якого ми будемо складати`), 10);
while (isNaN (secondNumber) || secondNumber <= firstNumber) {
    secondNumber = parseInt (prompt (`Введіть будь-яке ціле число `, 10),  10)
};
console.log(`Число М рівне: ${secondNumber}`);

let evenNumber = confirm('Пропускати тільки парні числа?');

let sumNumber = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
    if (evenNumber && i % 2 === 0) {
       continue 
    }
    sumNumber += i;
    
};
console.log(sumNumber);