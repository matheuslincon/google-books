export const getBooksBySearchValue = async (search) => {
  if(search === "") {
    throw new Error("Can not search for empty value")
  }

  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=12`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
}