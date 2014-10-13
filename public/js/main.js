/**
 * Example implementation will use an array instead
 * of a store.
 */
var books = ['The Time Machine', 'Pride and prejudice'];

/**
 * Adds book element on the page
 */ 
function addBook(title) {
	var bookTemplate = document.getElementById('book-template').innerHTML;
	var html = bookTemplate.replace('{{title}}', title);

	var li = document.createElement('li');
	li.innerHTML = html;

	li.querySelector('.edit-button').addEventListener('click', function() {
		console.log('edit');
	});

	li.querySelector('.delete-button').addEventListener('click', function() {
		console.log('delete');
	});

	var ul = document.getElementById('book-list');
	ul.appendChild(li);
}

books.forEach(addBook);