import { books } from '../../services/data/Books.js';
import Book from '../../components/Book/Book.jsx';
import style from './BookList.module.scss';

const BookList = () => {
  return (
    <>
      <section className={style.list}>
        {books.map((book, i) => {
          return <Book key={i} book={book}/>
        })}
      </section>
    </>
  )
}

export default BookList