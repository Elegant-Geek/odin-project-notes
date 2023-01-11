// FIZZBUZZ 7:35pm-8:58pm
// parseInt takes prompt number and makes it an integer
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// x === x checks for NaN values. x will never === x when it is Nan, so if x !== x is true, it is Nan!
// I ADDED A WHILE LOOP so that you get the prompt repeated until your input is valid!
while ((answer !== answer) || (answer < 0) || (answer > 100)) {
    console.log(`You typed: ${answer}`);
    alert("Please enter a positive integer value no more than 100!");
    answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
}

// for loop to take in the input. Prints value of i up until the user's number is equal to i. Once input = i, loop stops at the top.
// i is used to just print numbers on loop. The answer aka user input, is what defines how high i goes up to.
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      }
      else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
  }

// testing in step one that prompt can output the users number


