import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./containers/BookList/BookList";

const App = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = (value) => {
    setSearch(value);
  }

  return (
    <>
      <Header/>
      <SearchBar handleSearch={handleSearch} />
      <BookList search={search}/>
    </>
  )
}

export default App
