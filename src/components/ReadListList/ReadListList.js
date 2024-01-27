import "./ReadListList.scss";
import ReadListItem from "../ReadListItem/ReadListItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";

const ReadListList = () => {
  const { user, getToken } = useKindeAuth();
  const [readList, setReadList] = useState([]);

  const userId = user.id;

  const fetchReadList = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.get(
        `http://localhost:8080/api/books/${userId}/read`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setReadList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReadList();
  }, []);

  function calculateTotalPages(books) {
    const totalPages = books.reduce((total, book) => {
      if (typeof book.book.pageCount === "number") {
        return total + book.book.pageCount;
      }
      return total;
    }, 0);

    return totalPages;
  }

  const pageCount = calculateTotalPages(readList);

  return (
    <>
      <section className="readlist">
        <h2 className="readlist__header">{`${user.given_name} you have read ${
          readList.length
        } ${
          readList.length === 1 ? "book" : "books"
        }! That is ${pageCount} pages.`}</h2>
        {readList.length > 0 ? (
          readList
            .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
            .map((book) => {
              return <ReadListItem key={book.book.isbn} book={book} />;
            })
        ) : (
          <>
            <div className="readlist__no-book-container">
              <p className="readlist__no-books-header">
                Click below to search!
              </p>
              <Link to="/">
                <div className="readlist__no-books-button-container">
                  <button className="readlist__no-books-button">Search</button>
                </div>
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ReadListList;
