function openBook(evt, bookName) {
    // Declare all variables
    var i, bookcontent, books;
  
    // Get all elements with class="bookcontent" and hide them
    bookcontent = document.getElementsByClassName("book-content");
    for (i = 0; i < bookcontent.length; i++) {
      bookcontent[i].style.display = "none";
    }
  
    // Get all elements with class="book" and remove the class "selected-book"
    books = document.getElementsByClassName("book");
    for (i = 0; i < books.length; i++) {
      books[i].className = books[i].className.replace(" selected-book", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(bookName).style.display = "block";
    evt.currentTarget.className += " selected-book";
  }
  
  document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("the-myth-and-the-mouse").click(); 
});

