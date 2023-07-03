import style from './SearchBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {
  return (
    <>
      <section className={style.wrapper}>
        <input className={style.wrapper__input} type="text" id="searchInput" />
        <button className={style.wrapper__button}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </section>
    </>
  )
}

export default SearchBar