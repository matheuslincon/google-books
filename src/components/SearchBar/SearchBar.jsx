import style from './SearchBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("")

  const onChange = (e) => {
    setSearchInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
    setSearchInput("");
  }

  return (
    <>
      <form className={style.wrapper} onSubmit={onSubmit}>
        <input className={style.wrapper__input} type="text" id="searchInput" value={searchInput} onChange={onChange}/>
        <button className={style.wrapper__button}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
    </>
  )
}

export default SearchBar