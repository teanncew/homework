// Задача 1
const firstName = "Maksim";
const lastName = "Mensky";
const isStudent = true;

// Задача 2
const age = 23;
const currentYear = 2025;
const birthYear = currentYear - age;
console.log(birthYear);

// Задача 3
// console.log("Меня зовут", firstName, lastName + ",", "мне", age, "года. Я ученик курса:", isStudent + ".");
console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} года. Я ученик курса: ${isStudent}.`);

// Задача 4.
// Какое значение будет у переменной result?
let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;

// 123456789 false true

console.log(result);


