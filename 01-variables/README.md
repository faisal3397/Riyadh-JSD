# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Basics & Variables

Welcome to your first bootcamp exercise at General Assembly!

The goal of this exercise is to get you acquainted with the different control structures we have in JavaScript.

Ready?

## Introduction

For this Pair-Programming activity we are going to use a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop). You can fine a REPL that runs in the browser for programming languages as JavaScript in [repl.it](https://repl.it/)

We could also type JavaScript code in an editor, and then execute it to see the results in the REPL.

Ready to start?

## Requirements

- Go to [repl.it](https://repl.it/languages/javascript) and create an account (or login if you have one)
- Open a new repl.it and make sure the language is ==JavaScript==
- Type this in the ==Code Editor== (left panel)

  ```javascript
  console.log("I'm Ready!");
  ```
- Press `run ►`
- If you can see the message on the JavaScript REPL, you're ready!!

  ![](https://i.imgur.com/4TQislb.png)




### Preparation
*Before this lesson, students should already be able to:*

- Be comfortable navigating between folders on the command line.
- Run JavaScript on the command line using Node.js and use basic variables.

>Last class, we worked on using basic commands in the terminal, writing JavaScript, and working with Git and GitHub. Check with students to make sure that everyone is comfortable with the materials covered in the last class.

>Take a look at some simple keyboard shortcuts to practice: [CLI Shortcuts](https://gist.github.com/alexpchin/01caa027b825d5f98871)

---
<a name="opening"></a>
## What is a Data Type?

Let's jump into today's lesson—data types—where we’ll learn the basics of JavaScript and how to exchange data. 

Building an app requires the exchange of data—and it all starts with data types. But what are data types? In computer science and computer programming, a data type is a classification identifying one of various types of data. Using data types, we can determine 1) the possible values for that type; 2) the operations that can be performed on values of that type; 3) the meaning of the data; and 4) the way values of that type can be stored.

You might have already encountered data types. Data types hold many similarities across different languages:

| Data Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| Integers | Whole numbers, with no delimiter | `42`, `1024` |
| Floats | Decimals, with no delimiter | `3.14`, `3.0` |
| Booleans | Represents either true or false | `true`, `false` |
| Arrays | Collections of Data | [ Superman, Batman, Spider-Man] |
| Objects | ------ | ----- |

We'll now elaborate on Strings, Integers, and Floats (the others will come later)and explain how they differ in JavaScript, show you how to work with each type, and get some practice using “helper methods” to manipulate this data.

*Citation: [Wikipedia](https://en.wikipedia.org/wiki/Data_type)*

#### Working with Data in JavaScript

JavaScript contains a standard library of objects, including Array, Date, and Math, as well as a core set of language elements, such as operators, control structures, and statements; client-side JavaScript extends this core language by providing objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events, such as mouse clicks, form input, and page navigation.

>Note: This is a good point to provide examples of browser-based JavaScript applications. Open an example [application form](https://generalassemb.ly/applications/new/javascript-development) on the General Assembly website and pull up the source code to show students how client-side JavaScript works.

*Citation: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)*

---
<a name="codealong1"></a>
## Datatypes

For this lesson, we're going to use the terminal and Node to run some basic scripts to understand the types of data we're working with. Open the terminal and type in ```node```.

#### Part 1: `typeof( )`

We don’t yet know what type of data we're working with, so let’s ask the computer. To do this, we can use [`typeof()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof). Let's try it out in the terminal with the following:

  ```javascript
  typeof(37) === 'number';
  => true

  typeof({}) === 'object';
  => true

  typeof('hi there') === 'string';
  => true

  ```
  `typeof()` returns a string with the type of the operand, or expression of the object you're looking at.

  >Note: At this point we haven't explained exactly what objects are. Provide a brief overview of objects as a collection of properties, and of a property as an association between a key and a value. Objects in JavaScript are used in two ways:
    >1. As simple structured data store, similar to arrays—the main difference being that instead of accessing values by index, we access them by a key.
    >2. As a fundamental programming paradigm that helps us structure and categorize our code.
  >More about objects in the second half of this class.

#### Part 2: Numbers

Numbers are divided into two classes or objects:

* Integers (a.k.a. "whole numbers")

  ```javascript
   ..., -1,0, 2, 3, 4, 5, ...
  ```

* Floats (or Decimal numbers)

  ```javascript
   2.718, 3.14, 0.5, 0.25, etc.
  ```

All numbers in JavaScript are **"double-precision 64-bit format IEEE 754 values"**. In other words,  there's really no such thing as an integer in JavaScript. In this case, you have to be a careful with your arithmetic if you're used to math in other programming languages. Let's take a look at what happens when we do this:

  ```javascript
  0.1 + 0.2
  => 0.30000000000000004
  ```

In JavaScript, these data points are the same **type** of object—which JavaScript calls *Numbers*--so don't be surprised when `typeof( )` doesn't return 'float' and 'integer.'


#### Part 3: Arithmetic Operators

We use operators to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators)—which you have been learning since grade school—are supported here, including addition, subtraction, division, and so forth. Check it out:

```javascript
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```

<a name="codealong1"></a>
## Comparison Operators

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These can be used for both strings and numbers. This can be either beneficial or frustrating to a developer, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

#### Double-Equals Equality Operator `==`

Equality is a bit more complex. JavaScript provides two ways to verify equality.

When you verify equality using double-equals `==`, JavaScript performs much of the "type coercion" in the background. As we mentioned above, if the operands have a different type (e.g., the number `1` and the string `"1"`), JavaScript will attempt to change the type of both operands in order to check if they are equal. This means that expressions will often return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

#### Triple-Equals Equality Operator `===`

To avoid type coercion and to measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we should always use `===` instead of `==`, which is a legacy of the early days of JavaScript when people thought it might be useful to have an operator that does type coercion before checking equality, but that's pretty much never a good idea as it defeats the whole purpose of having data types.

> **Note:** "Sameness" and "equality" have various definitions, which can make the differentiation somewhat fuzzy. They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should carefully investigate the way this works.

Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some situations when `===` does not behave as we expect it to, for example when empty objects or arrays are involved:

```javascript
{} === {}
//=> Uncaught SyntaxError: Unexpected token ===

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, not just "primitive" values like strings, numbers, and Booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types." Strings and numbers are "value types."

What does this all mean? When we attempt to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each case above, checking for equality is actually comparing two objects that are in two different places in memory. They're not exactly "the same."

#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`. And again, we should always use `!==` and `===`, because they are more precise than `!=` and `==`.

---

<a name="codealong2"></a>

## Truthy and Falsey (15 min)

All of the following become false when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

All other values become true when converted to a Boolean.

Do not confuse the primitive Boolean values `true` and `false` with the true and false values of the Boolean object. For example:

```javascript
var b = new Boolean(false);
if (b) { console.log("true") }
//=> true
```

There is a simple way of verifying the 'truthyness' or 'falseyness' of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a Boolean. So if you add two `!` then you'll get the Boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

*Find more on truthy and falsey values [here](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)*

---
