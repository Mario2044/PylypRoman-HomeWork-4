let number = prompt ('Please enter three numbers separated by commas.');

let numberRef =[...number];

number.split(',');

let first = number[0];

let midlle = number[1];

let last = number[number.length - 1];

alert(`first number is ${first}, last number is ${last}.`);

let sum = +first + +midlle + +last;

alert(`Пользователь ввел ${first} + ${midlle} + ${last} и получил ${sum}`);

let min;
let max;

if (numberRef[0] > numberRef[1] && numberRef[0] > numberRef[2]) {
    max = numberRef[0];
} else if (numberRef[1] > numberRef[0] && numberRef[1] > numberRef[2]) {
    max = numberRef[1];
} else (numberRef[2] > numberRef[0] && numberRef[2] > numberRef[1]); {
    max = numberRef[2];
}

if (numberRef[0] < numberRef[1] && numberRef[0] < numberRef[2]) {
    min = numberRef[0];
} else if (numberRef[1] < numberRef[0] && numberRef[1] < numberRef[2]) {
    min = numberRef[1];
}

alert(`min is ${min}, max is ${max}`);

let numOne = prompt("Please enter one of the numbers which you entered before?");

if (number.indexOf(numOne) === -1) {
alert("Sorry, you did not enter this number!");
}
else {
alert(number.indexOf(numOne));
}