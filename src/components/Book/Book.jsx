import style from './Book.module.scss';

const Book = ({book}) => {
  const { volumeInfo } = book

  return (
    <article className={style.book}>
      <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ''} alt={volumeInfo.title} />
      <h2>{volumeInfo.title}</h2>
      <h3>{`by ${volumeInfo.authors[0]}`}</h3>
      <p>{volumeInfo.description}</p>
    </article>
  )
}

export default Book