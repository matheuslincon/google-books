import { useEffect, useState } from 'react';
import Book from '../../components/Book/Book.jsx';
import style from './BookList.module.scss';
import { getBooksBySearchValue } from '../../services/fetchData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const BookList = ({ search }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const firstRender = useRef(true);

  const fetchResult = async (search) => {
    setLoading(true)
    try {
      const booksData = await getBooksBySearchValue(search)
      setBooks(booksData);
    } catch(e) {
        setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(!search) {
      setBooks([])
      return
    }
    fetchResult(search)
  },[search])

  return (
    <>
      <p className={style.search_text}>{error}</p>
      <p className={style.search_text}>{search === "" && "Can not search for empty value !"}</p>
      <p className={style.search_text}>{loading && <FontAwesomeIcon icon={faSpinner} spin className={style.icon}/>}</p>
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