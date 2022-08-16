const showBooks = (book) => {
  const container = document.querySelector('.container');
  container.innerHTML += `
  <div class = "wrapper">
  <div class ="content">  <p class = "title"> title : <span>${book.title}</span> by </p>
  <p>Author : ${book.author}</p></div>
  <button class = "remove" type = button>Remove</button>
  </div>
  `;
};
export default showBooks;
