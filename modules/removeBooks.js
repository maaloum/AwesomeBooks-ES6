import getBooks from './getBooks.js';

const removeFromLocalSorage = (title) => {
  const previousbooks = getBooks();
  const newBooks = previousbooks.filter((item) => item.title !== title);
  localStorage.setItem('booksCollection', JSON.stringify(newBooks));
};

export const deleteBook = (target) => {
  if (target.classList.contains('remove')) {
    removeFromLocalSorage(target.parentNode.firstElementChild.firstElementChild
      .firstElementChild.innerHTML);
    target.parentNode.remove();
  }
};

const handleremove = (e) => deleteBook(e.target);

export default handleremove;
