import getBooks from './getBooks.js';
import showBooks from './showBooks.js';

const books = getBooks();
const addBooks = (book) => {
  books.push(book);
  localStorage.setItem('booksCollection', JSON.stringify(books));
  showBooks(book);
};

export default addBooks;
