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

## Conditional Statements (15 min)

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