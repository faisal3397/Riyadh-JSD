# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Data Types Methods, Loops & Conditions

### Learning Objectives
*After this lesson, students will be able to:*

- Use if/else conditionals to control program flow based on Boolean (true or false) tests.
- Use Boolean logic (!, &&, ||) to combine and manipulate conditional tests.
- Use switch/case conditionals to control program flow based on matching explicit values.
- Differentiate among true, false, 'truth-y', and 'false-y'.
- Review loop iteration using for and forEach, and introduce while and do/while loops.

### Preparation
*Before this lesson, students should already be able to:*

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.
- Iterate over and manipulate values in an array.


---

#### Part 2: Adding Elements to the Arrays

Use bracket notation to add values to the one of the arrays; use the `.push()` method for the other.

```javascript
goods[2] = "juice"

quantity.push(8)
```

>Note: Explain to the students the differences in adding (or setting) array values. What are the pros/cons of each approach?

#### Part 3: Accessing Elements from Arrays and Concatenating Them With Strings

Now it's time to access various combinations of the two arrays’ elements and concatenate their returned values.

```javascript
  => 'Today, I consumed ' + quantity[0] + ' cups of ' + goods[0]
  => 'I am going to have ' + quantity[1] + ' cups of ' + goods[1] + ' tonight'
```

---
<a name="codealong5"></a>
## Array Helper Methods (25 min)

Arrays come with a number of methods. Here's a list of some popular helpers:

> Note: You might want to demonstrate a few of these.

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - Adds one or more items to the end.

- `a.reverse()` - Reverses the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift([item])` - Prepends items to the start of the array.

You will likely not remember _every_ method. Explore the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods provided for particular objects.


In this exercise, students will utilize their knowledge of array helper methods in order to decode a secret message.

#### Part 1: Array Creation and the `.push()` Method

```javascript
var message = []

message.push(8)
=> 1
message.push('r', 'e', 'b', 'm', 'u')
=> 6
message.push('n', 's', 'i', 'A', 'G', 'K')
=> 12

message
=> [ 8, 'r', 'e', 'b', 'm', 'u', 'n', 's', 'i', 'A', 'G', 'K' ]

```

#### Part 2: `.pop()`, `.shift()`, and `.unshift()`

```javascript
message.pop()
=> 'K'

message.shift()
=> 8

message.unshift(1)
=> 11
```

#### Part 3: Array Reversal Using `.reverse()`
```javascript
message.reverse()
=> [ 'G', 'A', 'i', 's', 'n', 'u', 'm', 'b', 'e', 'r', 1 ]
```

> Note: Discuss how the `.reverse()` method mutates the array structure.

#### Part 4: Array `.join()`

The `.join()` method joins all elements of an array into a single string.

Citation: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

__Note:__ The `.join()` method accepts an optional argument, __the separator__, which becomes a string that separates the array values. If no argument is supplied to `.join()`, the separator defaults to a comma.

```javascript
message.join()
=> 'G,A,i,s,n,u,m,b,e,r,1'

message.join(' ')
=> 'G A i s n u m b e r 1'

```
---
<a name="codealong6"></a>
## Iterating through an Array (25 min)

Iterating through the elements of an array, one at a time, is a very common and useful practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

How is the following code different from the one above?
```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 2; i < teams.length; i++) {
	console.log(teams[i]);
}
```

JavaScript arrays have several advanced _iterator methods_.

Many of these methods require a function to be supplied as an argument, and the code in which you write the function will be applied to _each_ item in the array, individually.

For example, we can use the `forEach` method instead of a `for` loop to iterate the elements:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(el) {
    console.log(el);
});
```

This function would return:

```javascript
Bruins
Cal Bears
Ravens
Ducks
undefined
```

Do you notice how much clearer this syntax is than that of the `for` loop?

Here are some other iterator methods for you to research and practice with:

- `Array.filter()`
- `Array.map()`


#### Part 1: Evens and Odds

Create an array--`evens`--and populate it with the even numbers 2 - 10. Create an array--`odds`--and populate it with the odd numbers 1 - 9.

```javascript
var evens = []
evens.push(2,4,6,8,10)
=> 5

var odds = []
odds.push(1,3,5,7,9)
=> 5
```

#### Part 2: `Array.filter( )`

The `.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)]

__Note:__ `.filter()` does not mutate the array it is acting upon; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.

```javascript
evens.filter(function (num) {
  return num > 5
})
=> [6, 8, 10]

evens
=>[ 2, 4, 6, 8, 10 ]

var bigNums = evens.filter(function (num) {
  return num > 5
})
=> undefined

bigNums
=> [6, 8, 10]

var smallNums = odds.filter(function (num) {
  return num < 5
})
=> undefined
smallNums
=> [1, 3]
```

#### Part 3: ‘Array.map( )’

The `.map()` method creates a new array with the results of calling a provided function on every element in this array.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)]

__Note:__ `.map()` does not mutate the array it is acting upon; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.

```javascript
var timesFive = evens.map(function (num) {
  return num * 5
})
=> undefined

timesFive
=> [10, 20, 30, 40, 50]

var timesTen = odds.map(function (num) {
  return num * 10
})
=> undefined

timesTen
=> [10, 30, 50, 70, 90]
```
---

## Conditional Statements

Conditional statements enable us to essentially decide which blocks of code to execute and which to skip, based on the results of tests that we run. JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off with the 'if'...'else' statement, which uses Boolean (true or false) tests.

#### If/Else Statement

`if (expr) { code }`  

... is a command to run the `code` block if `expr` is `true`

```javascript
if (1 > 0) {
  console.log("hi");
}
//=> hi
```

You can also add an optional `else` clause, to run if `expr` is _not_ `true`:

`if (expr) { code } else { other code }`

```javascript
if (0 > 1) {
  console.log("hi");
} else {
  console.log("bye");
}
//=> bye
```

When you need to test more than one case, you may use `else if`:

```javascript
var name = "kittens";
if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name === "kittens!!"
//=> true
```

**Note**: It is **not** recommended to assign variables within a conditional expression because that will assign a value to the variable, as seen below:

```javascript
student = "Jamie";
//=> "Jamie"
```


#### Ternary Operators

JavaScript has a ternary operator for conditional expressions. The ternary operator is basically a concise "if-else” in one line, except that it not only executes blocks of code, it also returns a value:

```javascript
var age = 12;
//=> undefined

var allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```

## Switch Statements (25 min)

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.

## Switch Statement Usage

#### Part 1: Construct If/Else Conditionals

Create an if/else statement that returns a string, such as "Awesome Job" if the user gets a grade of “A” or "Bad Job" if they get an "F." Console.log a string for each letter grade.

```javascript

var grade = 'C';

if (grade === 'A') {
  console.log('Awesome job');
} else if (grade === 'B') {
  console.log('Good job');
} else if (grade === 'C') {
  console.log('Okay job');
} else if (grade === 'D') {
  console.log('Not so good job');
} else if (grade === 'F') {
  console.log('Bad job');
} else {
  console.log('Unexpected grade value entered');
}

```

#### Part 2: Construct Similar Logic Using a Switch Statement

Using the if/else statement from above, convert it into a switch statement.

>Ask students to do this exercise individually.

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
    break;
  case 'B':
    console.log('Good job');
    break;
  case 'C':
    console.log('Okay job');
    break;
  case 'D':
    console.log('Not so good job');
    break;
  case 'F':
    console.log('Bad job');
    break;
  default:
    console.log('Unexpected grade value entered');
}

```

#### Part 3: Which is Faster?

>Note: Prompt students to answer which format is faster. Be sure to elaborate on the number of computations run by each of the approaches. For example, when evaluating for `grade = 'C'` using the if/else approach, the condition (`grade === 'x'`) is evaluated three times. What if the if/else statement had 10 conditions? 100? How would this impact the speed of the program? Please see ['Writing Efficient JavaScript'](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html) for more details.

#### Part 4: Intentionally `Break` the Switch Statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Ask the students to explain what is occurring here. If you are unable to generate any responses, try changing the `grade` being evaluated from `'C'` to `'B'`:

```javascript
var grade = 'B';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Good job
=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Be sure to explain the purpose of the `break`, (i.e., to stop evaluating and break out of the `switch` statement after the condition has been met).

#### Part 5: Illustrate the Fall-Through Technique

You will often need to return the same value for different cases. The fall-through technique is one way to achieve this:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```
---

<a name="codealong5"></a>
## While and Do-While

`While` is a loop statement that will run **while** a condition is true.

JavaScript has `while` loops and `do-while` loops. The first is useful for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

[rewrite of the paragraph above for clarity; please check for accuracy]
JavaScript has `while` loops and `do-while` loops. The first is useful for basic looping; however, it would forever remain inert without the `do-while` loop, which ensures that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

[some of this below looks like it might be missing content…]
```javascript
while (true) {
  // an infinite loop!
}
```

This should be enough to break a browser.

```javascript
var input = 0;
do {
  console.log(input++);
} while (input < 10);
```
---
<a name="codealong6"></a>
## Iteration

Iterating is a way of incrementally repeating a task.

#### for

You can iterate over an array with:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  console.log(i);
}
```

If the array length is fixed (aka elements are not being added/removed which change the number of elements in the array), the previous loop is slightly inefficient because it is essentially looking up the length property once every loop. An improvement is to chain the `var` assignment:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0, len = a.length; i < len; i++) {
  console.log(i);
}
```

Notice the placement of the comma and semi-colons.

#### forEach

Another way of iterating over an array added with ECMAScript 5 is [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
   console.log("I want a ", currentValue);
   console.log(array[index]);
});
```
---


#### Further Resources

* Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.

* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

* [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

* [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

* [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

* [w3schools](https://www.w3schools.com/js/default.asp)