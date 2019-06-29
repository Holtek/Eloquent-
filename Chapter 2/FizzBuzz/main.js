// My shitty code that was not working

for (let i = 0; i <= 100; i++) {
  if ((i % 3) == 0) {
    console.log('Fizz');
  } else if (i % 5 && !(i % 3)) {
    console.log('Buzz');
  } else if (i % 3 && i % 5) {
    console.log('FizzBuzz');
  }
}

// GOOD code that i didn't write...
for (let n = 0; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}