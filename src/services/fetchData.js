export const getBooksBySearchValue = async (search = "") => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}