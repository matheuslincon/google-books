import style from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <h1>Search for your favorite book !</h1>
        <h4>Explore the selection of books available at Google Books. Write the book title in the search bar bellow.</h4>
      </div>
    </>
  )
}

export default Header