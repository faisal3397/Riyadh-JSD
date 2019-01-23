const readline = require('readline-sync');
/*
    Write your codes beneath this line
*/



/*

## Independent Practice (10 min)

When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design a program that will let users know what legal privileges U.S. citizens enjoy based on their age.

Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. See the conditions below:

- If you are under 16, you cannot do much outside of going to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can smoke cigarettes
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you collect social security benefits

Have the program print out only the most recent thing that they've become eligible to do, i.e. if they are 46, only print "You can run for president." (This will at least force them to use `else if` instead of just `if`).

Students can work in pairs to complete the exercise. 
*/


var age = readline.question("What is your age?");



/*
    Create a command line app that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
    i.e values can be 1 - 15
*/

var maxValue = readline.question("What is the max value?");



/*
Ask the user for a new string and check if it's a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Examples of palindromes:
	- "A man, a plan, a canal, Panama!"
	- "Amor, Roma"
	- "race car"
	- "stack cats"
	- "step on no pets"
	- "taco cat"
	- "put it up"
	- "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

var sentence = readline.question("Is the sentence a palindrome?");




/*
Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common beepboop loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "beep" should appear.
// - If the number is divisible by  **5**, the word "boop" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "beepboop" should be logged.
*/
var beepBoop = readline.question("Enter Max number?");

/* Extra work
**1: 99 Bottles of Coke**
- Write a script that prints the lyrics to "99 Bottles of Coke on the Wall" in the terminal. 


- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of coke" and "1 bottle of coke").

*/
var lyrics



/*
**2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506`
*/

var address