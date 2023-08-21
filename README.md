# Google Books

![](https://github.com/matheuslincon/google-books/blob/main/gif/books.gif)

## Description

Google Books is a web app developed during nology training that allows users to search for books using the Google Books API. It displays the search results in the form of cards, showing the book's cover image, title and author. Users can also view more detailed information about a book by clicking on its card.

---

## Requirements / Purpose

Create a page that allows users to search for books Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books

  ### Instructions

  - When the submit button is clicked you need the request books from the Google books API using the input value as your query string
  - The books that you receive should be rendered in the books grid.
  - Each book in the grid should have an image, author, title.
  - The grid should be responsive on different screen sizes
  - Must use SCSS Modules for component styling

  #### Tech Stack:
    - React
    - SCSS

---

## Getting Started

To get started with this project, clone the repository and install the dependencies:

`git clone git@github.com:matheuslincon/google-books.git`

`cd google-books`

`npm install`

Then, start the development server:

`npm run dev`

  ### Building for Production

  To build the app for production, run the following command:

  `npm run build`

  This will create a production-ready build of the app in the `dist` directory.

---

## Features

-   A Grid of Books
-   A Modal with more information about the selected book.

---

## Future Goals
-   [x] Feedback on no results
-   [x] Add modals for more info
-   [ ] Make the app Responsive.
-   [ ] Utilised routes and URL parameters with React Router
-   [ ] Added pagination and max results
---

## Issues Addressed
I encountered issues with the API data due to missing properties in some books, which had to be handled to prevent errors:

- [x] Handled missing API data by adding default values.

---