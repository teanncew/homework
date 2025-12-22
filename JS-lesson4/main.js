// Задача 1.

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  const discountAmount = basePrice * (discountPercent / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const taxAmount = priceAfterDiscount * taxRate;
  const finalPrice = priceAfterDiscount + taxAmount;
  return finalPrice;
}
console.log(calculateFinalPrice(100, 70, 0.3));


// Задача 2.

function checkAccess(userName, password) {
  if (userName === 'admin' && password === '123456') {
    return 'Доступ разрешен';
  } else {
    return 'Доступ запрещен';
  }
}
console.log(checkAccess('admin', '123456'));
console.log(checkAccess('adm', '12345'));
console.log(checkAccess('user', '123456'));
console.log(checkAccess('bubon', '65431'));



// Задача 3.

const getTimeOfDay = сurrentTime => {
  if (сurrentTime >= 0 && сurrentTime <= 5) {
    return 'Ночь';
  } else if (сurrentTime >= 6 && сurrentTime <= 11) {
    return 'Утро';
  } else if (сurrentTime >= 12 && сurrentTime <= 17) {
    return 'День';
  } else if (сurrentTime >= 18 && сurrentTime <= 23) {
    return 'Вечер';
  } else {
    return '"Некорректное время"';
  }
};
console.log(getTimeOfDay(5));
console.log(getTimeOfDay(6));
console.log(getTimeOfDay(12));
console.log(getTimeOfDay(18));
console.log(getTimeOfDay(26));


// Задача 4.

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return 'Четных чисел нет';
}
console.log(findFirstEven(1, 10));
console.log(findFirstEven(3, 6));
console.log(findFirstEven(7, 10));
console.log(findFirstEven(9, 9)); 