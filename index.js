function result(num1, num2) {
    return num1 * num2;
}
const num1 = 31;
const num2 = 2;
const multiply = result(num1, num2);
console.log(multiply);

const random = Math.floor(Math.random() * 100) + 1;
console.log(random);

const num3 = 24;
const num4 = 5;
const mod = num3 % num4;
console.log(mod);

const numbers = [10, 20, 15];
const max = Math.max(...numbers);
console.log(max);
