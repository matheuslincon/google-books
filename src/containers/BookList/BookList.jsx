import { useEffect, useState } from 'react';
import Book from '../../components/Book/Book.jsx';
import style from './BookList.module.scss';
import { getBooksBySearchValue } from '../../services/fetchData.js';


const BookList = ({ search }) => {
  const [books, setBooks] = useState([]);

  const fetchResult = async (search) => {
    const booksData = await getBooksBySearchValue(search)
    setBooks(booksData);
  }

  useEffect(() => {
    if(search){
      fetchResult(search);
    }
  },[search])

  return (
    <>
      <p className={style.search_text}>{!books && `No results found for: ${search}`}</p>
      <p className={style.search_text}>{books && books.length > 0 && `Showing results for: ${search}`}</p>
      <section className={style.list}>
        {books && books.map((book) => {
          return <Book key={book.id} book={book}/>
        })}
      </section>
    </>
  )
}

export default BookList