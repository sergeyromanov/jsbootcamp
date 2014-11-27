JavaScript BootCamp. Day 1.
---------------------------
---------------------------

0. Writing to console
---------------------
It is not fun to write programs unless you see the results and JavaScript is no exception. Here's the way to write a value in JavaScript:

```
console.log('Hello World');
console.log(5);
```

`console.log` can accept more than one argument, in this case each value is printed on a console:

```
console.log('Hello', 'Dear', 'World', 15, 'Times');
```

Just don't forget to separate the values with commas.

At this point I'm not going to explain why and how this syntax works: it would require too much text and would postpone the most interesting parts 'till late. Just trust me for now, and use it as a mantra. If you need to print something:

```
console.log(someThing); // Assuming that someThing is a variable
```


> **NOTE:** I am trying to keep the amount of 'black magic' parts to the 
> bare minimum but this one looks unavoidable.

1. Statements and Semicolons
-----------------------------
JavaScript program, just like almost any other program in any programming language is made of lines of code, each line containing expressions and statemets. Here is an example of JavaScript program that creates a variable and then prints it to the screen:

```
var a = 7;
console.log('The value of a is', a);
```

Being a very forgiving language JavaScript allows you to omit semicolons that separate statements, if they are at the end of line. That's exactly where most semicolons go. It is up to you to decide if you want to use them or not. Big JavaScript code bases (like node.js and angular.js) prefer to use semicolons. 

The code below is also a valid JavaScript, however there's no semicolons:

```
var a = 7
console.log('The value of a is', a)
```

Semicolons can not be omited everywhere. For example, you cannot delete semicolons that separate the parts of `for` loop. In this text and throughout the course we will be using semicolons.

2. Variables
------------
Variables are an essential part of programming language. Thay allow to store some data in memory and then access it using the name of the variable. Look at the code in the previous listing for a simple example of variable syntax.

There are two ways to create a variable:

```
var a = 10; // Create and assign a value
var b;		// Only create, no value yet

b = 15;		// Assigned a value
```

If a variable is created but does not have the value yet, its value will be `undefined`.

JavaScript also allows you to create a variable omiting the keyword `var`. This will create a global variable from any place in your program. This syntax is frowned upon, so never do this at home.

```
k = 10; // k is global now! DON'T DO THAT
```

We'll speak more about why JavaScript developers consider this syntax evil later, when we'll be looking at functions.

3. Variable types
-----------------
In JavaScript there are 6 data types:

* Number
* String
* Boolean
* Object
* Null
* Undefined

Every variable has an associated type at any point of its lifetime. 

You noticed that we are not specifying the type of a variable when we declare one. That _does not_ mean that variables have no types. JavaScript simply infers the type of a variable from the assignment.

```
var k = 17;		// type is number

var j = false;	// type is boolean
```

Variable can change its type during a lifetime:

```
var n = 17;		// What started as a number...
n = false;		// can end up as a boolean
				// so is the life
```

Here's a quick way to check what's the current type of a variable:

```
var n = 17;
console.log(typeof n);	// prints 'number'
n = false;
console.log(typeof n);	// prints 'boolean'
```

	> *GEEK-NOTE:* `typeof` operator is not very accurate, there are some
	> corner cases where `typeof` is showing wrong type. Most prominent are:
	```
	typeof null; 		// returns object, but the real type is Null
	typeof console.log 	// returns `function`, but function is not 
						// a separate data type
	```
	> however `typeof` is still a very good sanity checker

The main idea to grasp is that JavaScript associates a type information with every single variable. The type can change at runtime, but it is always there. Even a variable that does not yet have a value _still_ has a type `undefined`:

```
var a;
console.log(typeof a);	// prints 'undefined'
```

4. Numbers
----------
`Number` is a type to hold numbers (sure, you did not expect that). There are many ways to express a number in JavaScript. Here are some:

```
var a = -12.8;	// Normal, decimal
var b = 0xFF;	// Hexadecimal
var c = 5e10;	// Scientific or exponential
```

In JavaScript there's no difference between kinds of numbers: both floating point and integer, signed and unsigned are treated as a type `Number`.

### 4.1. Operations with numbers ###
Common sense and normal logic are widely applied to operations with numbers. 

```
var a = 5.2 + 0.2;	// Addition, result is 5.4
var b = 4 - 7;		// Subtraction, result is -3
var c = 2*2;		// Multiplication, result is 4
var d = 10/3;		// Division, result is 3.33333(3)
```
There's also a `Remainder` operator that returns the remainder of division:

```
var z = 5%2; 	// z is now 1, because the remainder
				// of an integer division is 1
```

> **GEEK-NOTE:** `%` is not a `modulo` operator like in some other languages
> since it treats the sign differently. If you feel like getting deeper 
> into the subject, here is a [link that explains the difference][1]
> just for you.

There are unary increment and decrement operations:

```
var x = 4;
console.log(x++);	// x is first printed, then incremented
console.log(++x);	// x is first incremented, then printed
					// x-- works the same way
```

One of the most frequent operation in programming is "read, change, write back", like the following:

```
a = a/2;
```

There's a shorthand notation that is much easier to read:

```
a += 2;		// Add 2 to a and save back
a -= 2;		// Subtract 2
a *= 3;		// Same for multiplication
a /= 6;		// ... and division
a %= 2;		// Saves the division remainder to a
```

Lastly, there are unary `+` and `-` operators that do exactly what they look like.

```
var a = 5;
var b = -a;	// b is now -5
var a = +b;	// nothing happened
```

### 4.2. Bitwise operations ###
JavaScript defines a common set of bitwise operators that you would expect from a programming language:

```
var a = 1 | 2; 	// Bitwise OR, result is 0011, which is 3 
var b = 1 & 3; 	// Bitwise OR, result is 0001, which is 1
var c = 1 ^ 3; 	// Bitwise XOR: result is 0010, which is 2
var d = ~0;		// Bitwise NOT: result is -1 (all bits are 1)
```

Note that bitwise operators convert their operands to 32 bit integers dropping the decimal part:

```
console.log(3.4 | 0); 	// Prints 3, because .4 is dropped
```

### 4.3. Number precision ###
Naturally, numbers have limited precision (there is a limited number of bits in those numbers after all). After some threshold the operations might look quite weird or even mathematically incorrect. Here's an example:

```
var a = 5e50;
console.log(a == a + 1);	// true, because 1 is too small to be represented 
							// in this huge number, it is just lost.
```

You'll rarely encounter this in practice, but it is worth knowing that it's  a bad idea to implement banking operations with type `Number`. Just like you would never do that with `double` in Java.

### 4.4. Formatting numbers ### 
TODO

5. Strings
----------
String is a data type to store text. For example, here's how I would store a book title as a string:

```
var title = 'The Time Machine';
```

There are two ways to create a string literal: using single quotation marks or double quotation marks:

```
var a = "This is a string";
var b = 'This is also a string';
```

There's no difference between two representations, choose which one you like better, and stick to that. 

If you used single quotation marks then double quotes can be used as a normal character, and vice versa:

```
var textA = 'I like "The Time Machine" - fiction classics';
var textB = "I'm quite anxious to buy a new watches";
```

JavaScript strings can have international symbols in it, so you should not worry about Russian or Chinese:

```
var textA = 'Русский текст будет работать';
var textB = '强烈热带气旋乔伊';
```

> **GEEK-NOTE:** Internal character encoding of JavaScript VMs implementation 
> is UCS-2 or UTF-16 (the latter, being the superset of the former). Here is 
> [a nice article][3] about character sets and the implementation of JavaScript VMs.

### 5.1. Escape sequences ###
If you need to insert the _same_ quotation marks as you use to create a literal, you can _escape_ them:

```
var text = 'Hello, I\'m Juriy';
```

Backslash character changes a meaning of a character immediately 
following it. In the example above, a quotation mark becomes 
just a character instead of the end of a string.

There are other use cases for backslash, most frequent is to create a line break:

```
var text = 'Hello\nI am Juriy';
```

> *NOTE:* the special character sequences that change the way 
> text is rendered are called _control_ or _escape_ sequences. 
> They were used in terminals to add some features to the console output: 
> colors, clearing screen, moving cursor around.
> 
> For those of you loving terminal estetics of '80s, this is a great tool!
> Read more about [escape sequences][2].

Finally, you should already know how to represent a backslash itself in the string. You _escape_ it with another backslash:

```
var winPath = 'c:\\apps\\projects';
``` 

### 5.2. Indexing characters in a string ###

String is a sequence of characters, each character having its own index. Indexes start from 0. You can use a _square bracket syntax_ to read the character:

```
var title = 'The time Machine';
console.log(title[0]); // Prints 'T';
console.log(title[2]); // Prints 'e';
```

The overall number of character (but not necessary bytes!) of a string is called a `length`. You can read the length of the string using the same-named property:

```
var title = 'The time Machine';
console.log(title.length);  // Prints 16;
```

Using the length property it is easy to read string characters from the end of the string. The index of the last character is `length - 1`, the one before last is `length - 2` and so on.

### 5.3. String immutability ###

JavaScript strings are _immutable_ - once created they cannot be changed. 
If you try to _set_ a character at a given place you'll see that the code is
silently ignored:

```
var title = 'The time Machine';
console.log(title);  // Prints 'The time Machine';
title[2] = 'z';
console.log(title);  // Prints 'The time Machine', not changed
```

The same holds for all functions. There's no way to change an existing string, 
only to create the new ones.

### 5.4. String functions ###
JavaScript has quite standard library of functions, usually having 
only a bare survival minimum of functions. Below are few most commonly used string
functions:

`str.substr(start, [length])` - returns the part of the string starting from 
`start` and having `length` characters. If `length` is omited, then `substr` 
returns everything from the `start` to the end of the string:

```
var title = 'The Time Machine';
console.log(title.substr(4, 4)); // Prints 'Time'
console.log(title.substr(9));	 // Prints 'Machine'
```

There's another version of the same function called `substring`. The only difference
between the two is that `substring` accepts index of the last character instead of 
desired length:


```
var title = 'The Time Machine';
console.log(title.substring(4, 8)); // Prints 'Time'
console.log(title.substring(9));	 // Prints 'Machine'
```

`str.indexOf(searchValue[, fromIndex])` - finds a substring in a string and returns the index of the first character. If there's no match, `indexOf` returns `-1`.

A search starts from `fromIndex`. If `fromIndex` is omited, the whole string is searched. 

```
var title = 'The Time Machine';

console.log(title.indexOf('Time')); 	// Prints 4
console.log(title.indexOf('Time', 5)); 	// Prints -1, there's no
										// word 'Time' after index 5
```

`str.replace(regexp|substr, newSubStr|function[, flags])` - is a very powerful
function that works with both strings and regular expressions. It builds a new string
replacing the parts of the original string. The original string remains unaffected.
Right now, we'll look at `string`  version of a function, if you want to 
read the whole description, refer [replace() documentation in MDN][5]

```
var title = 'The Time Machine';

title = title.replace('Machine', 'Traveller');
console.log(title); 	// Prints 'The Time Traveller'
```

### 5.5. Concatenation ###
You can concatenate strings with `+` operator:

```
var a = 'The Time';
var b = 'Machine';
var title = a + ' ' + b;
console.log(title); 	// Prints 'The Time Machine';
```

Notice, that if at least one operand of `+` is a string, JavaScript treats `+` as string
concatenation and casts the other operand to string too.

```
console.log(7 + '5'); // 75
```

If there is a more complex expression like `7 + 5 + '3'` it is evaluated from 
left to right. In this case, the result is `123`. However if you change the order
of operations: `7 + '3' + 5` the result will be different - `735`. 
JavaScript executes operators from left to right.

6. Booleans
-----------
`Boolean` is a simple logical type. It has only two values: `true` and `false`. 
Boolean supports standard set of logical operations:

* `||` - boolean OR
* `&&` - boolean AND
* `!`  - boolean unary NOT

> *NOTE:* Make sure you don't confuse logical and bitwise operators. For example,
> `&` is bitwise AND, the result of which is a `Number` while `&&` is a logical 
> AND, the result of which is `Boolean`. It is easy to remember which one is where,
> just think that bit operations are _lower_ level so the operators have _lower_ number
> of symbols - one instead of two.

You often get `Boolean` as a result of a relational operator:

```
var b = 5 > 7; // b is now false 
```

7. Common Statements
--------------------
--------------------
In JavaScript there are several kinds of statements, quite common for the other programming languages. Let's look at them now.


8. If statement
---------------
`if` - is basic conditonal statement that selects the path of execution. 

### General Form ###

The general form for `if` is the following:

```
if (expression) {
	// code to execute if expression is true
}
```

An `expression` is anything that evaluates to a boolean: a boolean variable, an logical expression, or even a literal - `true` or `false`.

Curly braces are optional. If omitted, `if` will only execute single statement:

```
if (formIsValid)
	console.log('The form is ok');
```

Good coding practices say that it is best to put curly braces everywhere, to make your
code more consistent.

```
if (formIsValid) {
	console.log('==================');
	console.log('= The form is ok =');
	console.log('==================');
}
```

Now, suppose that you want to print two different messages, one when a form is valid, and one when it is not. We could do it with the help of `else` block. Here is a general form:

```
if (expression) {
	// code to execute if expression holds
} else {
	// code to execute if expression does not hold
}
```

Just like with `if` block, `else` can be used without curly braces, when there's only one statement. 

### else-if ###

There's no specialized elseif statement in JavaScript, however you can combine `if`s and `else`s together to improve readability of the code.

```
// Checking the size of the book
// How long will it take to read it?

if (pages < 50) {
	console.log('casual read');
} else if (pages < 200) {
	console.log('evening read');
} else {
	console.log('read for a weekend');	
}
```

If you look at the code above, you will see that it is reformatted version of the following code:
Now we don't need to put the first part of condition `pages >= 50`, because it will always be true. We are in `else` block which means that the expression in `if` is `false`, that in turn means that the number of pages is more than 50. We now can remove that code:

```
if (pages < 50) {
	console.log('casual read');
} else {
	if (pages < 200) {
		console.log('evening read');
	} else {
		console.log('read for a weekend');	
	}
}
```
### Ternary if ###

There is one more shorthand notation for `if` operator, called _ternary if_. It is mostly used when you need to assign different values depending on the result of expression. 

```
// Is this book big or small?
var bookType = numPages > 300 ? "Big Book" : "Small Book";
```

Ternary if, as name suggests works with three operands. First is the expression that can be `true` or `false`. If it is `true`, then the result of the second expression is returned, if it is `false`, then ternary if returns a result of second expression.

9. Switch Block
---------------
`switch` is a conditional statement that chooses the path of execution depending on the value of a variable.

Let's learn its syntax by example:

```
// Recommend a book by its genre

var genre = 'steampunk';
switch(genre) {

	case 'dark fantasy':
		console.log('"At the Mountains of Madness"');
	break;

	case 'steampunk':
		console.log('"The Difference Engine"');
	break;

	default:
		console.log('"I Robot"');
	break;
}
```

In the listing above `switch` compares the value of `genre` to several possible cases. If the matching case is found, the execution will continue from that point until it reaches `break`. If there's no match, then `default` block runs. If there's no `default` and there's no match - nothing runs at all. 

If there's no `break` in `case` block, the execution will continue until `break` is found or we have reached the end of block.

But this behavior is not always an error. Sometimes it might be desirable. For example, if we want to recommend the same book in two different genres then instead of duplicating the code, we put two `case`s one after the other. Now, because of fall-through, both these genres will print the same value.

10. While loop
--------------
In JavaScript there are three types of loops: `for` loop, `while` loop and `do-while` loop. 

Let's start from `while`. The syntax is very simple:

```
while(expression)
	statement
```

The statement inside the loop will repeat as long as expression is `true`. If you want to execute multiple statements, you surround them with braces, just like with `if` statement:

```
while(expression) {
	statement 1
	statement 2
	....
	statement N
}
```

For example, here's how you can write the same line three times:

```
var i = 0;
while(i < 3) {
	i++;
	console.log('Hello World');
}
console.log('Done')
```

This loop is said to have three iteration. An _iteration_ is a single run of a loop body.

There is other variation of this loop, used quite rarely. It is called a `do-while` loop. It works exactly like `while` but instead of checking the condition _before_ the body of the loop, it checks the condition after. The syntax is very similar:

```
do {
	statement 1
	statement 2
} while (expression)
```

The normal `while` loop is called a _loop with pre-condition_, and the `do-while` is called a _loop with post condition_.

11. For loop
============
In JavaScript there's another type of loop, called a `for` loop. Let's start from the example, and then explain how it works. Here is a `for` loop that prints each letter of the string, together with its index:

```
var string = 'Time machine';
for (var i = 0; i < string.length; i++) {
	console.log(i, string[i]);
}
```

A header of `for` loop has three blocks: _initialization_, _condition_ and _final statement_. 

In `for` loop every part is optional. For example, this is a valid `for` loop:

```
var k = 0;
for (; k < 3; k++) {
	console.log(k);
}
```

And this loop is also valid: 

```
var k = 0;
for (; k < 3; ) {
	console.log(k);
	k++;
}
```

Finally this loop is also valid, but it is infinite, because there's no condition when to end it.

```
var k = 0;
for (; ; ) {
	console.log(k);
	k++;
}
```

You can omit any part of `for` loop, but you must keep semicolons in place.

Notice, if you look closely to this version: 

```
for (; k < 10; ) {
	console.log(k);
	k++;
}
```

You'll see that this is exactly what `while` loop does. 


12. Breaking loops and skipping iterations
==========================================
To finilize an introduction to loops, here are two more statements to give you finer-grain control over your loops: `break` and `continue`.

* `break` - halts the execution of the loop and jumps to the next statement after loop's end.
* `continue` - halts an iteration and jumps to the next one.

Here's an example of the code that looks for a full-stop (.) character in the text and halts once it is found:

```
for (var i = 0; i < text.length; i++) {
	if (text[i] === '.') {
		console.log('Match found', i);
		break;
	}
}

```

In the next example, we decide to skip odd iterations, and we'll use `continue` to do that.

```
for (var i = 0; i < text.length; i++) {
	if (num % 2 === 0) {
		// we only want odd indices, skip even characters
		continue;
	}

	if (text[i] === '.') {
		console.log('Match found', i);
		break;
	}
}

```

> NOTE: this code is not the best possible for solving the task.
> Think how to do it better!


`continue` will also work with `while` and `do-while`. 

14. Introduction to objects
===========================
Object is a central data type in JavaScript. Object is a huge topic - using objects in a right way allows building beautiful and logically structured programs. We will come back to Objects several time during this course since some of the topics are quite advanced and require some preparation and practice. In this block we will just touch the basics of Objects. 

So what's an object in JavaScript. Before answering that, try to answer a phylosophical question, of what is an object in a real material world. It is hard to give a strict definition, but an object is something that has some characteristics: size, weight, color, shape. 

This is a generalization that is used in JavaScript. JavaScript presents an object as a collection of it's properties. A property is just like a variable - a name and a value. 


### 14.1 Creating objects ###
So here's an example of an object that might represent a book:

```
var book = {
	name: 'The time machine',
	pageCount: 100,
	isInteresting: true
}
```

It's easy to grasp a syntax. You create a variable with `var` keyword, then open braces and list the properties inside. 

Note that you're not using a keyword `var` inside the object, you simply put a name of a property, then colon and then a value. You must put a comma between the properties, not a semicolon, like in usual code.


### 14.2 Accessing properties ###
There are two ways to access a property of an object. The first is to use what's known as _dot syntax_. Here's how it works:

```
console.log(book.title);
```

Using the same syntax you can assign a new value to a property, just like you would assign a value to a variable:

```
book.title = 'Hobbit';
```

The alternative way to access an object is _square bracket syntax_. Here how it works:

```
console.log(book['title']);
book['title'] = 'Hobbit';
```

The advantage of square bracket syntax is that you can use any string as a key. For example, this would work in a square bracket syntax:

```
book['key with spaces']
```

The same is impossible to achieve with dot syntax:

```
cup.key with spaces // wrong
```

The second advantage, is that you can pass a variable to square brackets:

```
var keyName = 'title';
book[keyName] = 'Hobbit';
```

If you try to get a property that is missing in the object, you get `undefined`. This behavior is similar to variables

```
console.log(book.weight);   // undefined, no such property
```

Objects give you a way of organizing your data and keeping it consistent. We'll learn more about objects in the next lessons.

15. Nested objects
==================

You already know how to build objects from primitive values:

```
var book = {
	name: 'The time machine',
	pageCount: 100,
	isInteresting: true
}
```

However you are not limited to numbers, strings and booleans. A value of object property can be any JavaScript type, even another object. Let's say we want to add an information about writer to the book. You could do it like this: 

```
var book = {
	name: 'The time machine',
	pageCount: 100,
	isInteresting: true,
	authorFirstName: 'Herbert',
	authorLastName: 'Wells'
}
```

However it would be much more logical to present author as another object, and treat it as a separate entity:

```
var book = {
	name: 'The time machine',
	pageCount: 100,
	isInteresting: true,
	author: {
		firstName:  'Herbert',
		lastName: 'Wells'
	}
}
```

We just created an object that has another object inside. And this is not a limit! You can go deeper and create yet another object inside:

```
var book = {
	name: 'The time machine',
	pageCount: 100,
	isInteresting: true,
	author: {
		firstName:  'Herbert',
		lastName: 'Wells'
		homeland: {
			name: 'England'
			lat: 51.5286416,
			lng: -0.1015987
		}
	}
}
```

To access the internal object you can use either dot syntax or square brackets syntax just like with normal objects:

```
book.author.firstName
```

the same as:

```
book['author']['firstName']
```

> NOTE: you don't put a dot between square brackets 

You can also use both styles in the same expression:

```
book['author'].firstName
```

16. Iterating through objects
=============================
It is often useful to list object keys. You can do it with a special type of loop called `for..in`loop. The syntax is as follows:

```
for (var key in book) {
	console.log(key + ' = ' + book[key]);
}
```

Using a very similar syntax you can check if the property is defined on an object:

```
if ('name' in book) {
	console.log('name is defined')
}
```

> **NOTE:** `for..in` is a loop that repeats for every property. `in` is a relational
> operator that evaluates to boolean. They are not the same even though they look similar.


Iterating with `for..in` works only on the properties of an object itself, not on the properties of child objects. In the example above 'firstName' of an 'author' will not be listed.


17. Deleting properties
=======================

As you've seen before, you can add a property at any time:

```
book.color = 'red';
```

And you can also delete a property at any time:

```
delete book.color;
```

After you've deleted a property it will not appear in `for..in` loop and will not be reported by `in` operator.

18. Arrays
===========================

In JavaScript there are two special types of objects: arrays and functions. In this block we will speak about arrays and leave functions for the next section of this course.

Array is basically a collection of values each of which has its own index. Here's an example of array that holds three numbers.

```
var arr = [1, 2, 4];
```

You can access the numbers by index with square bracket syntax, just like for objects:

```
console.log(arr[0]);
```

The index of array is zero-based, meaning that the first element will have idex `0`, second element - index `1`, and so, just like characters in string. And similarly to string, an array has a property `length` that tells how many elements are there:

```
console.log(arr.length);
```

Now with all the knowledge that you already possess, you should figure out very quickly, how to print all values in an array:

```
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

JavaScript arrays are not limited in size. If you add an index beyound the bounds of an array, `length` will automatically update, so you don't need to track it manually. 

It is OK to have gaps in JavaScript array. All the keys that don't have assigned values will have `undefined` as their value. The length of this array will be defined by biggest index.

```
var arr = [1];	// Add element at index 0
arr[100] = 2;	// Add element at index 100
// length is now 101

console.log(arr[5]); // prints undefined
```

An array is not limited to a single data type. In fact any valid value can be stored in array together with others:

```
var a = [1, false, null, {name: 'John'}, 'Hello World', undefined];
```

### 18.1. Array as object ###
Being an object, an array can have non-numeric properties:

```
arr.color = 'green';
```

However it is quite unusual to use arrays that way.

### Adding/removing elements to the begginning/end ###

An array can act as a stack or a queue, it has methods to add and remove elements from both ends of array:


* `arr.push(el1, el2... )` - adds new values to the end of array, length is increased

* `arr.pop()` - removes the last element and returns it, length is reduced. If there are no elements left, returns 'undefined'

* `arr.shift()` - removes the first element of the array, all indices are shifted left, and `length` is reduced

* `arr.unshift(el1, el2 .... )` - adds values to the beggining of the array, all existing indices are increased

Later in this block I'll show how to add/remove elements from the middle of an array. Hint: look for `splice()` function.

### indexOf() ###
The other common operation is finding an element in an array, the `indexOf` function is an analog of the same function for strings that we've used before. For arrays it will return the index of _the object_ that is contained in array, or `-1` if there's no such object. `indexOf()` accepts an optional parameter, a starting index. If you pass it, then first N elements are ignored in search.

```
// Look for the string 'John', skip
// first three elements
console.log(arr.indexOf('John'), 3)
```

Remember: array is zero-based just like a string, so the index of the first element is 0.

`indexOf()` is also used whenever you need to check if array contains a certain element. There's no special method for that, instead you use `indexOf()`, and check the result. If it is `-1`, then the array does not have this element. If it is anything but `-1`, then an element exists in the array.


### Extracting sub-array ###

Just like extracting a substring out of a string, you often need to perform a similar operation with an array. There's a method for that called `slice()`.

```
var arr = ['a', 'b', 'c', 'd', 'e']
arr.slice(2);
```

returns all elements from index 2 (element 'c') and till the end of array.

`slice()` also accepts an optional `end` parameter, that marks the element that ends the slice. That element doesn't go to the result:

`arr.slice(2, 4)` will create a new array with 2 elements, 'c' and 'd'. Element 'e' that has index 4 will not go into the result.

Note that `slice()` does not modify an original array. 

### splice() ###

There's another method not to be confused with `slice()` called `splice()`. It allows to extract the part of an array and then replace the extracted part with new elements. Unlike `slice()`, `splice()` _modifies an existing array_. Here's an example:

```
var arr = ['a', 'b', 'c', 'd', 'e'];
var extracted = arr.splice(1, 2);
```

This code will extract two elements starting from index 1. These elements are 'b' and 'c'. If you add more parameters to splice, it will add them as array elements in place of deleted ones. 

```
var arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(1, 2, 'g', 'h', 'i');
```

The same method is used to _delete_ element. Here's how to delete an element at index 5:

```
arr.splice(5, 1);
```

> **NOTE:** In JavaScript there's no separate method to remove elements from an array, so use `splice()` instead.

### concat() ###
There's a function join two arrays into one that works like concatenation for strings:

```
var concatenated = [1, 2].concat([3, 4]) // resuls in [1, 2, 3, 4]
```
The original array does not change, instead a new array is created.

19. Special Types: Undefined and Null
-------------------------------------
Both `Undefined` and `Null` are separate data types in JavaScript, each of them having only 
one possible value - `undefined` and `null` respectively. They both stands for _no value_, however they have a very different semantics.


20. Undefined
-------------
Let's start with `undefined`. 

You as a programmer do not need to assign `undefined` anywhere yourself. There are a very rare corner cases why you might need to do that.

JavaScript uses `undefined` for two general cases: when something is absent and something does not yet have a proper value. _Something_ might be a variable, an object property or a function parameter (we'll speak about functions later).

Here's the first case:

```
var a;
console.log(a)
```

The variable has been created, but it has not yet been assigned a value. The value is `undefined`.

The second and more interesting case is object keys:

```
var obj = {
	name: 'Test'
}

console.log(obj.age);
```

The code prints `undefined` again, because there's no such key in this object.

Now you might ask, if you can assign undefined as a regular value, then will this be valid:

```
var obj = {
	name: 'Test',
	age: undefined
}
```

And if this is valid, how would you distinguish between an object property that does not exist, versus a propoerty that exists, but its value is undefined? You can use `in` operator that we described earlier. So the following check will tell you if the property exists:

```
if ('age' in obj) {
	console.log('Age exists');
}
```

The code below by contrast checks if the property is `undefined` OR it does not exist. 

if (obj.age === undefined) {
	console.log('Age is undefined');
} else {
	console.log('Age is defined');
}

As you see, we use triple equals sign to filter out `null` values. So if property is `null`, this check will not pass, and the code will print 'Age is defined'.

Now, a question: if you want to delete a property of an object, will it be correct to set it to undefined? Of course not. Setting property value to undefined will merely change the value of that property. The property itself will remain on the object and it will be reported by `in` operator. The only proper way to delete a property is by using `delete` operator which is made specifically for that.

Distinguishing between absent property and an undefined property is rarely required. If you follow the recommended practices, you will never assign undefined to variables or object keys yourself, so checking for 'undefined' is sufficient in most cases.

If you read somebody else's code you might find the following expression from time to time: 

```
if (typeof a === 'undefined') {
	// Do something
}
```

This is an outdated, yet perfectly valid code. In the older versions of JavaScript, `undefined` was a normal variable, and one might assign some value to it. This was a defensive way to protect code against such cases. 

This method still have a specific valid use case: if you need to check if a variable with a given name exists. 

You can't just write

```
if (anyVariableAtAll) {
	console.log(`Looks like it is there`);
}
```

This code will throw a `ReferenceError`. However, 

```
console.log(typeof anyVariableAtAll)
```

Will give you a nice `undefined`

20. Null
-------
`Null` is also a data type that has only one value - `null`. Unlike `undefined`, `null` is supposed to be used _by programmers_. The semantics of `null` is _intentional absence of value_. For example, if you search for a user with a name `John` in database, then a result of `null` might mean that there's nobody with such name. 

Here's another example: in a social network a user might choose to put a profile picture. If user has decided that he does not need a picture, or decided to remove his old picture, you would use `null` to denote it.

```
user.picture = null;
```

`Null` is a very simple data type. The only caveat is that JavaScript will report `null` as 'object' if you use a `typeof` operator, even though the type of `null` is `Null`:

```
typeof null
```

This behavior exists for legacy reasons.


21. Type Casting
----------------
TO BE DONE



[1]: http://blogs.msdn.com/b/ericlippert/archive/2011/12/05/what-s-the-difference-remainder-vs-modulus.aspx
[2]: http://ascii-table.com/ansi-escape-sequences.php 
[3]: https://mathiasbynens.be/notes/javascript-encoding
[4]: https://blog.mozilla.org/ejpbruel/2012/02/06/how-strings-are-implemented-in-spidermonkey-2/
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
