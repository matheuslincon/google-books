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
    } else {
      setBooks(undefined);
    }
  },[search])

  console.log(books)

  return (
    <>
      <section className={style.list}>
        {books && books.map((book) => {
          return <Book key={book.id} book={book}/>
        })}
      </section>
    </>
  )
}

export default BookList