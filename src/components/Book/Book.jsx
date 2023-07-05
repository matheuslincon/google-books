import style from './Book.module.scss';
import BookModal from '../BookModal/BookModal';
import { useState } from 'react';

const Book = ({book}) => {
  const { volumeInfo } = book

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  }

  const onClose = () => {
    setShow(false);
  }


  return (
    <>
      <article className={style.book} onClick={handleShow}>
        <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ''} alt={volumeInfo.title} />
        <h2>{volumeInfo.title}</h2>
        <h3>{`by ${volumeInfo.authors[0]}`}</h3>
      </article>
      <BookModal show={show} book={book} onClose={onClose}/>
    </>
  )
}

export default Book