import "./BookSearch.scss";
import logo from "../../assets/logos/booksquirrel-logo.png";
import searchIcon from "../../assets/icons/search.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import BookResult from "../BookResult/BookResult";
import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function BookSearch() {
  const { user, getToken } = useKindeAuth();
  const [searchType, setSearchType] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");
  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState(null);
  const [inputClass, setInputClass] = useState("booksearch__search-bar");
  const [isInputEmpty, setIsInputEmpty] = useState(null);

  /* THIS IS TO REGISTER USER IN THE DATABASE */

  //   console.log(user);

  const userId = user.id;
  const firstName = user.given_name;
  const lastName = user.family_name;

  const registerUser = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.post(
        `http://localhost:8080/api/users`,
        {
          kindeId: userId,
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    registerUser();
  }, []);

  /* THIS IS THE GOOGLE BOOKS API SEARCH FUNCTIONALITY */

  const handleNewSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const isFormValid = () => {
    if (searchTerm.length <= 0) {
      setInputClass(`booksearch__search-bar booksearch__search-bar--error`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    if (isFormValid()) {
      try {
        const response = await fetchBookInfo(searchTerm, searchType); // Fetch book information from the API.

        if (response.items && response.items.length > 0) {
          const filteredBooks = response.items
            .filter((item) => item.volumeInfo.industryIdentifiers) // Filter out items without industry identifiers.
            .filter(
              (item) =>
                item.volumeInfo.authors &&
                item.volumeInfo.authors.length === 1 && // Filter out items with multiple authors.
                item.volumeInfo.imageLinks && // Check if imageLinks property exists.
                item.volumeInfo.imageLinks.thumbnail // Check if thumbnail property exists.
            )
            .filter((item, index, self) => {
              // Filter books with the same title (case insensitive) and unique titles.
              const title = item.volumeInfo.title.toLowerCase();
              return (
                self.findIndex(
                  (otherItem) =>
                    otherItem.volumeInfo.title.toLowerCase() === title
                ) === index
              );
            })
            .map((item) => item.volumeInfo) // Extract the volumeInfo property for each item.
            .filter((book) =>
              book.industryIdentifiers.some(
                (identifier) => identifier.type === "ISBN_13" // Filter books with ISBN-13 identifier.
              )
            );

          setBookList(filteredBooks); // Set the filtered books as the book list.
          setSearchTerm(" "); // Reset the search term.
          setError(null); // Clear any previous error message.
          setInputClass("booksearch__search-bar");
        } else {
          setBookList([]); // Set an empty book list.
          setSearchTerm(" "); // Reset the search term.
          setError("No books found with the given search criteria."); // Set an error message.
        }
      } catch (error) {
        setBookList([]); // Set an empty book list in case of an error.
        setError("An error occurred while fetching data."); // Set an error message.
        console.error("Error:", error); // Log the error to the console.
      }
    } else {
      setIsInputEmpty(true);
    }
  };
  const fetchBookInfo = async (searchTerm, searchType) => {
    const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API;
    const maxResults = 15;
    let apiUrl = "";

    if (searchType === "title") {
      apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&key=${API_KEY}`;
    } else if (searchType === "author") {
      apiUrl = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTerm}&maxResults=${maxResults}&key=${API_KEY}`;
    }

    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="booksearch">
      <div className="booksearch__container">
        <div className="booksearch__logo-container">
          <img src={logo} className="header-out__logo"></img>
        </div>
        <form onSubmit={handleSubmit} className="booksearch__form-container">
          <label className="booksearch__label">
            Search by:
            <select
              value={searchType}
              onChange={handleSearchTypeChange}
              className="booksearch__drop-down"
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>
          </label>

          <div className="booksearch__search">
            <input
              type="text"
              placeholder={isInputEmpty ? `Search cannot be empty` : `Search`}
              value={searchTerm}
              onChange={handleNewSearch}
              className={inputClass}
            />
            <img
              className="booksearch__search-icon"
              src={searchIcon}
              alt=""
            ></img>
          </div>
          <div className="booksearch__button-container">
            <button className="booksearch__button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      {error && <p>{error}</p>}
      {bookList.length > 0 && (
        <div>
          <h2 className="booksearch__results"> Results:</h2>
          {bookList.map((book, index) => (
            <BookResult key={index} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}

export default BookSearch;
