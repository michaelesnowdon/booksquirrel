import "./DiscussionBook.scss";
import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";
import ImageNotFound from "../../assets/images/image-not-found-icon.svg";

const DiscussionBook = ({ bookId }) => {
  const [book, setBook] = useState([]);
  const { getToken } = useKindeAuth();

  const fetchBook = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.get(
        `http://localhost:8080/api/books/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <article className="discussionbook">
        <h3 className="discussionbook__title">{book.title}</h3>
        <div className="discussionbook__container">
          <div className="discussionbook__image-container">
            <img
              src={book.thumbnail ? book.thumbnail : ImageNotFound}
              alt="Book Cover"
              className="discussionbook__thumbnail"
            />
          </div>
          <div className="discussionbook__details-container">
            <p className="discussionbook__author">Author: {book.author}</p>
            <p className="discussionbook__category">
              Category: {book.category}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DiscussionBook;
