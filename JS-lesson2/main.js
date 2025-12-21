// ----------------Задача 1----------------.

const number = +prompt('Введите любое число');
if (number % 2 == 0) {
  alert('Четое число');
} else {
  alert('Нечетное число');
}

// ----------------Задача 2----------------.

let age = +prompt('Введите свой возраст');

// // if (age < 18) {
// //   console.log('Скидка 10%');
// // } else if (age <= 65) {
// //   console.log('Скидка 20%');
// // } else {
// //   console.log('Скидка 30%');
// // }

// // let discount = isNaN(age) ? alert('Введите свой возраст') : age < 18 ? 'Скидка 10%' : age <= 65 ? 'Скидка 20%' : 'Скидка 30%';
// // console.log(discount);

switch (true) {
  case (age < 18):
    alert('Скидка 10%');
    break;
  case (age <= 65):
    alert('Скидка 20%');
    break;
  default:
    alert('Скидка 30%');
}

// ----------------Задача 3----------------.

let username = prompt('Введите имя пользователя');
let password = prompt('Введите пароль');

//-------- 

// if ((username === 'user' || username === 'admin') && password === '123456') {
//   console.log('Доступ разрешен');
// } else {
//   console.log('Доступ запрещен');
// }

//-------- 

// const welcome = ((username === 'admin' || username === 'user') && (password === '123456')) ? 'Доступ разрешен' : 'Доступ запрещен';
// console.log(welcome);

//--------

switch (true) {
  case ((username === 'user' || username === 'admin') && (password === '123456')):
    alert('Доступ разрешен');
    break;
  default:
    alert('Доступ запрещен');
}

// ----------------Задача 4----------------.

let weight = prompt('Укажите вес посылки');
let type = prompt('Укажите тип доставки("Стандарт", "Экспресс"или "Премиум".)');
let baseCost;
let coefficient;

isNaN(weight) || weight <= 0 ? alert('Некорректный вес посылки') : type != 'Стандарт' && type != 'Экспресс' && type != 'Премиум' ? alert('Неверный тип доставки') : weight < 1 ? baseCost = 5 : weight <= 5 ? baseCost = 10 : weight > 50 ? alert('Слишком большой вес посылки.') : baseCost = 15;

switch (type) {
  case 'Стандарт':
    coefficient = 1;
    break;
  case 'Экспресс':
    coefficient = 1.5;
    break;
  case 'Премиум':
    coefficient = 2;
}

let result = baseCost * coefficient;
alert(`Итоговая стоимость доставки: ${result}$.`);



