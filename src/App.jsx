import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import BookList from "./containers/BookList/BookList"

const App = () => {
  return (
    <>
      <Header/>
      <SearchBar/>
      <BookList/>
    </>
  )
}

export default App
