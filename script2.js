// ДЗ 9. Переписать if на switch case

// var age = prompt("Введите ваш возраст");

// if (age == 15) {
// alert("Вы еще слишком юны");
// }
// if (a == 25) {
// alert("Вы в расцвете сил");
// }

// if (a == 80 || a == 90) {
// alert( "Вы уже слишком стар для этого" );
// }

// if (a != 80 && a != 90 && a != 15 && a != 25) {
// alert( "Мы не готовы принять вашу заявку" );
// }


var age = +prompt("Введите ваш возраст");

switch (age) {
    case 15:
        alert("Вы еще слишком юны");
    break;
    case 25:
        alert("Вы в расцвете сил");
    break;
    case 80:
    case 90:
        alert( "Вы уже слишком стар для этого" );
    break;

    case 15:
    case 25:
    case 80:
    case 90:
    break;

    default:
        alert( "Мы не готовы принять вашу заявку" );
    break;
}