// let fistNumber = +prompt('введите число');
// let secondNumber = +prompt('введите степень');

// let result = 1;
// let i = 0;

// while(i < secondNumber) {
//     result *= fistNumber;
//     i++
// }
// alert(result);




// let fistNumber = +prompt('введите число');
// let secondNumber = +prompt('введите степень');

// let result = 1;
// let i = 0;

// do {
//     result *= fistNumber;
//     i++;
// } while(i < secondNumber);
// alert(result);





let fistNumber = +prompt('введите число');
let secondNumber = +prompt('введите степень');

let result = 1;

for(let i = 0;i < secondNumber;i++) {
    result *= fistNumber
}
alert(result);