class Book {
   constructor(title, author, isbn){
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }
}

class UI {
   addBookToList(book) {
    const list = document.getElementById('book-list');
   // create tr
   const row = document.createElement('tr');
   // insert columns
   row.innerHTML = `<td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href ="#" class= "delete">X</a></td>`;
   list.appendChild(row);
   }

   showAlert(message,className){
      const div = document.createElement('div');
   // add class
   div.className = `alert ${className}`;
   // add text
   div.appendChild(document.createTextNode(message));
   // get parent
   const container = document.querySelector('.container');
   const form = document.querySelector('#book-form');
   // insert alert 
   container.insertBefore(div,form);
   // timeout
   setTimeout(function() {
      document.querySelector('.alert').remove();
   },3000);
   }

   deleteBook(target){
      if (target.className == 'delete'){
         target.parentElement.parentElement.remove();
      }
   }

   clearFields(){
      document.getElementById('title').value = ' ';
      document.getElementById('author').value = ' ';
      document.getElementById('isbn').value = ' ';
   }
}

document.getElementById('book-form').addEventListener('submit', function(e){
   //  get form values
   const title = document.getElementById('title').valuee
   const author = document.getElementById('author').value
   const isbn = document.getElementById('isbn').value

   //  instantiate book constructor
   const book = new Book(title,author,isbn);

   // Instantiate UI
   const ui = new UI();

   // validate inputs
   if (title === ' ' || author === ' ' || isbn === ' '){
      // error alert
      ui.showAlert('Please fill in all the fields.','error'); }
      else {
         // add book to the list
         ui.addBookToList(book);
         ui.showAlert('Book Added!','success');
         // clear fields
         ui.clearFields();
      }
   e.preventDefault();
})

//  listen for delete
document.getElementById('book-list').addEventListener('click', function (e) {
   // instantiate UI
   const ui = new UI();
   ui.deleteBook(e.target);
   // show the user
   ui.showAlert('Book Removed.','success');
   e.preventDefault();
})