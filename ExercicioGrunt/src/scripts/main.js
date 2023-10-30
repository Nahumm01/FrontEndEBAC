const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number % 2 === 0) {
    console.log(number + " é par.");
  } else {
    console.log(number + " é ímpar.");
  }
}
