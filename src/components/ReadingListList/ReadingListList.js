import "./ReadingListList.scss";
import ReadingListItem from "../ReadingListItem/ReadingListItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";

const ReadingListList = () => {
  const { user, getToken } = useKindeAuth();
  const [readingList, setReadingList] = useState([]);

  const userId = user.id;

  const fetchReadingList = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.get(
        `http://localhost:8080/api/books/${userId}/unread`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setReadingList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReadingList();
  }, []);

  return (
    <>
      <section className="readinglist">
        <h2 className="readinglist__header">{`${user.given_name} you have ${
          readingList.length
        } ${
          readingList.length === 1 ? "book" : "books"
        } on your reading list!`}</h2>
        {readingList.length > 0 ? (
          readingList
            .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
            .map((book) => {
              return (
                <ReadingListItem
                  key={book.book.isbn}
                  book={book}
                  fetchReadingList={fetchReadingList}
                />
              );
            })
        ) : (
          <>
            <div className="readinglist__no-book-container">
              <p className="readinglist__no-books-header">
                Click below to search!
              </p>
              <Link to="/">
                <div className="readinglist__no-books-button-container">
                  <button className="readinglist__no-books-button">
                    Search
                  </button>
                </div>
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ReadingListList;
