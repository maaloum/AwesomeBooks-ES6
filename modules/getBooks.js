const getBooks = () => {
  const books = JSON.parse(localStorage.getItem('booksCollection')) || [];
  return books;
};
export default getBooks;
