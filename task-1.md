JavaScript training task 1.

Create a simple in-memory store for books. Your store shoul be a normal JavaScript object and you should use JavaScript array as your storage engine. 

To get you started, below is some code that illustrates the idea and implements a very simple `add()` function:

```
var store = {
	books: [],
	add: function(book) {
		this.books.push(book);
	}
}
```
You should bild your own of course.


Object IDs
----------
Each object that is added to the database should have a unique id. Whenever your store adds a new entity it assigns the unique ID that is stored in the object

```
var book = {
	/* Does not have any IDs */
	name: 'Pride and Prejudice'
};

add(book);			 // Your implementation should 
					 // add an id

console.log(book.id) // should print an number, not undefined
```

Functions 
---------
Your store should have several functions. Each function is described below together with an example of a code that uses that function and expected results. Your goal is to make this code work: write an implementation for those functions.

`add()` - adds an object or a collection of objects to the database. If the object is already present in the store, silently ignore it. The function should accept any number of arguments. Any argument that is not an object is silently ignored. The function returns an array of objects that were actually added. 
Use examples:

```
var book1 = {name: 'Pride and Prejudice'};
var book2 = {name: 'A Tale of Two Cities' };
var book3 = {name: 'Treasure Island'};
var book4 = {name: 'Dracula'};

add(book1);  	 // adds the first object to the store, 
				 // returns [{name: 'Pride and Prejudice', id: 123}]
				 // (the way you generate an ID is up to you)

add(book2, book3); // adds two more objects to the store, returns an 
				  // array with two objects

add(book4, book1); // adds only book4, because book1 is 
				   // already present in the database, 
				   // returns array with one element (book4) 
				   // because only this object was added
```

The function should not accept anything but objects. For example, if you try to add a number or a string it should silently ignore it:

```
add(1, "foobar") // nothing is added, returns 0
```

`remove()` - removes an object or number of objects from the store. The function should accept any number of arguments and return an array of removed entities. The rules are symmetrical to those for `add()`;

```
remove(book1);  // remove the object from the store, 
				// returns [{name: 'Pride and Prejudice', id: 123}]

remove(book2, book3); 	// removes two more objects to the store.
						// returns an array with two removed elements

remove(book4, book1); // removes book4, because book1 was already removed
				      // returns array with a single element (book4),
				      // since only one object was removed

add(book1, book2, book3, book4) // adds back all books

remove(book1, book3.id) // Removes book1 and book3, 
				 		// second parameter is an ID of book3, 
				 		// returns an array with two elements

remove(book2, 'Treasure Island') // Second parameter is silently ignored, remove book2
```


`find(idOrSearchTerm)` - finds books by their ID if the parameter is number OR by title OR by author name. Accepts one argument. Returns an array of found books. If no books found, a function should return an empty array. Extra task - text search must be case insensitive.

```
find(book3.id)  // Returns an array with a single element - book3
find() 			// returns an empty array
find('Pride')   // Returns an array with a single object, 
				// book 'Pride and Prejudice'

all() - returns all objects in the store as an array

print() - receives any number of parameters. If a parameter is an object - prints it in one line
		- if a parameter is an array, prints every object in its own line
		- if there's no parameters, print the whole store, each object in its own line

```
Useful links
============
MDN Documentation - https://developer.mozilla.org

Pay special attention to this part - array functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array