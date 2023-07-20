import style from './BookModal.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faStar } from "@fortawesome/free-solid-svg-icons";

const BookModal = ({show, book, onClose}) => {
  const { volumeInfo } = book;

  if(!show) {
    return null
  }

  return (
    <div className={style.modal}>
      <article className={style.modal__inner}>
        <span className={style.inner__icon}><FontAwesomeIcon icon={faSquareXmark} onClick={onClose} /></span>
        <div className={style.inner__content}>
          <div>
            <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'https://source.unsplash.com/random/?book'} alt={volumeInfo.title} />
          </div>
          <div>
            <p>Title: {volumeInfo.title}</p>
            <p>Author: {volumeInfo.authors ? volumeInfo.authors[0] : "Unkown"}</p>
            <p>ISBN: {volumeInfo.industryIdentifiers ? volumeInfo.industryIdentifiers[0].identifier : ""}</p>
            <p>Published Date: {volumeInfo.publishedDate ? volumeInfo.publishedDate : ""}</p>
            <p>Publisher: {volumeInfo.publisher ? volumeInfo.publisher : ""}</p>
            <p>Language: {volumeInfo.language ? volumeInfo.language : ""}</p>
            <p>Average Rating: {volumeInfo.averageRating ? volumeInfo.averageRating : Math.floor(Math.random() * 5)} <FontAwesomeIcon icon={faStar} /></p>
            <p>{volumeInfo.description}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BookModal