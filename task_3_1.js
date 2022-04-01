/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

const count = 100;
let i = 1;

while (i <= count) {
  if (i === 2 || i === 3 || i === 5 || i === 7) {
    console.log(i++);
    continue;
  } else if (i === 0 || i === 1 || i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
    i++;
    continue;
  }
  console.log(i++);
}
