function getTemplateText(cb) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			cb(xhr.responseText);
		} 
	};

	xhr.open('GET', 'book.html');
	xhr.send();	
}

function getBooks(cb) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			cb(JSON.parse(xhr.responseText));
		} 
	};

	xhr.open('GET', '/api/books');
	xhr.send();	
}

function addBook(title, template) {
	template = template.replace('{{title}}', title);

	var el = document.createElement('li');
	el.innerHTML = template;

	var parent = document.getElementById('book-list');
	parent.appendChild(el);
}

getBooks(function(books) {
	getTemplateText(function(template) {
		books.forEach(function(book) {
			addBook(book.title, template);
		});
	});
});

/*

TODO

function onBooksReceived(books) {
	getTemplateText(onTemplateTextReceived);
}

function onTemplateTextReceived(text) {
	books.forEach(function(book) {
		addBook(book.title, text);
	});
}

getBooks(onBooksReceived);
*/