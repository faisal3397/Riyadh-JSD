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
