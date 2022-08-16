// import {deleteBooks} from 'modules/deleteBooks.js'
import getBooks from './modules/getBooks.js';
import handleremove from './modules/removeBooks.js';
import showBooks from './modules/showBooks.js';
import addBooks from './modules/addBook.js';
import date from './modules/dateDisplay.js';

const container = document.querySelector('.container');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');
const add = document.querySelector('#add');
const contact = document.querySelector('#contact');
const form = document.querySelector('form');
const touch = document.querySelector('#touch');

// Poping different section in the single page
list.addEventListener('click', () => {
  container.style.display = 'block';
  form.style.display = 'none';
  touch.style.display = 'none';
});
add.addEventListener('click', () => {
  form.style.display = 'block';
  container.style.display = 'none';
  touch.style.display = 'none';
});
contact.addEventListener('click', () => {
  touch.style.display = 'block';
  form.style.display = 'none';
  container.style.display = 'none';
});

document.querySelector('.container').addEventListener('click', handleremove);

const books = getBooks();

books.forEach((element) => {
  showBooks(element);
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const t = document.querySelector('#title').value;
  const a = document.querySelector('#author').value;
  // const book = new Book(t, a);
  if (!(t === '' && a === '')) {
    const newBook = {
      title: t,
      author: a,
    };
    addBooks(newBook);
  }
});

date();
