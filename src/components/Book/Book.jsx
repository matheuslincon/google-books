import style from './Book.module.scss';

const Book = ({book}) => {

  return (
    <article className={style.book}>
      <img src={book} alt="kitten" />
      <h2>{book}</h2>
      <h3>{`by ${book}`}</h3>
      <p>{book}</p>
    </article>
  )
}

export default Book