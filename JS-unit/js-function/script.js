// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
    
    let num;
    function add7(num) {
      return num + 7;
    }

    function multiply(num1=0, num2=0) {
      return num1 * num2;
    }

    function cap(word) {
        // lowercase the whole entry
        word = word.toString().toLowerCase();
        // split chars to grab first one only
        const chars = word.split('');
        // yeet capitalizes first word then attaches second string to it
        let yeet = word[0].toUpperCase() + word.substring(1);
        return yeet;
    }

    function lastLetter(word) {
        return word[word.length-1];
    }

    console.log(add7(1));
    console.log(multiply(2,5));
    console.log(cap('HellO TherE!'));
    console.log(lastLetter('doggo'));
