let number = prompt ('Please enter three numbers separated by commas.');

number.split(',');

console.log(number);

let first = number[0];

let midlle = number[2];

let last = number[number.length - 1];

alert(`first number is ${first}, last number is ${last}.`);

let sum = +first + +midlle + +last;

alert(`Пользователь ввел ${first} + ${midlle} + ${last} и получил ${sum}`);

let min;
let max;

if (number[0] > number[2] && number[0] > number[4]) {
    max = number[0];
} else if (number[2] > number[0] && number[2] > number[4]) {
    max = number[2];
} else (number[4] > number[0] && number[4] > number[2]); {
    max = number[4];
}

if (number[0] < number[2] && number[0] < number[4]) {
    min = number[0];
} else if (number[2] < number[0] && number[2] < number[4]) {
    min = number[2];
}

alert(`min is ${min}, max is ${max}`);

let numOne = prompt("Please enter one of the numbers which you entered before?");

if (number.indexOf(numOne) === -1) {
alert("Sorry, you did not enter this number!");
}
else {
alert(number.indexOf(numOne));
}