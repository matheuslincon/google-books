import style from './Book.module.scss';

const Book = ({book}) => {
  const {title, image, author, description} = book;

  return (
    <article className={style.book}>
      <img src={image} alt="kitten" />
      <h2>{title}</h2>
      <h3>{`by ${author}`}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Book