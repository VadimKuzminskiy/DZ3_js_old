
// alert( a || c && b || d );
// alert( e || c && b && d );
// alert( e && c || b || e || d); 

// И «&&» находит первое ложное значение
// ИЛИ "||" находит первое истинное значение



// var name = prompt("Введите ваше имя");

// switch (name) {
// case 'Денис':
// alert( 'Добрый день, учитель' );
// break;

// case 'Алиса':
// case 'Иван':
// case 'Анастасия':
// case 'Андрей':
// alert( 'Привет, одногрупник' );
// break;

// default:
// alert( 'Ты не из нашей песочницы!' );
// }

var youName = prompt("Введите ваше имя");

if (youName == 'Денис') {
    alert( 'Добрый день, учитель' );
} else if (youName == 'Алиса' || youName == 'Иван' || youName == 'Анастасия' || youName == 'Андрей'){
    alert( 'Привет, одногрупник' );
} else {
    alert( 'Ты не из нашей песочницы!' );
}