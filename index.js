let number = prompt ('Please enter three numbers separated by commas.');

let numSplit =number.split(',');

let num = numSplit.join('');

let first = num[0];

let midlle = num[1];

let last = num[num.length - 1];

let sum = +first + +midlle + +last;

let min;
let max;

alert(`first number is ${first}, last number is ${last}.`);

alert(`Пользователь ввел ${first} + ${midlle} + ${last} и получил ${sum}`);


if (num[0] > num[1] && num[0] > num[2]) {
    max = num[0];
} else if (num[1] > num[0] && num[1] > num[2]) {
    max = num[1];
} else (num[2] > num[0] && num[2] > num[1]); {
    max = num[2];
}

if (num[0] < num[1] && num[0] < num[2]) {
    min = num[0];
} else if (num[1] < num[0] && num[1] < num[2]) {
    min = num[1];
}

alert(`min is ${min}, max is ${max}`);

let numOne = prompt("Please enter one of the numbers which you entered before?");

if (numSplit.indexOf(numOne) === -1) {
alert("Sorry, you did not enter this number!");
}
else {
alert(numSplit.indexOf(numOne));
}