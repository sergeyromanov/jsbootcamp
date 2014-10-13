Task 2
======
======
Build a web page to display a catalog of books. An application should be pure client-side (no server side calls for now). It should support listing books, adding new book, updating book and removing a book.

Listing books
=============
Once the page is loaded it should print all the books in the collection.

Adding books
============
There should be a way to add new book to the collection. For example, a form on the bottom of the page that allows user to enter a title of a book, and a button that adds a book to the collection. Perform a minimal validation - if the text in the title field is empty, output an alert box saying `enter the title`.

Removing books
==============
Each book entry should have a button `delete`. When user clicks that button, the book should be deleted from the collection and from the page.

Updating book info
==================
Each book entry should have a button `edit` that enables a user to edit a title of a book. When user clicks it, a form changes and instead of `<span>` with the name of the book, a text input appears. Input box should be pre-populated with the book title. For example, if there is a one-letter typo in a book title, a user should not have to re-type the whole title.

Once user has finished editing he should click `save` button and an updated book title is stored in a collection. Perform a minimal validation. Updated book title must not be empty.

