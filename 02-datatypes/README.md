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

> Note: Last class, we worked on data types, arrays, helper methods, and array iterations. Check with students to make sure that everyone is comfortable with the materials covered in the last class before introducing the new material.

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

>To illustrate why programmers implement a switch statement—as opposed to if/else logic—compare these two approaches with the students.

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