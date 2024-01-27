import "./ReadingListItem.scss";
import ImageNotFound from "../../assets/images/image-not-found-icon.svg";
import Tick from "../../assets/icons/tick.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Discussion from "../../assets/icons/discussion.svg";
import moment from "moment";
import { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";
import DeleteBookModal from "../DeleteBookModal/DeleteBookModal";
import UpdateBookModal from "../UpdateBookModal/UpdateBookModal";
import { Link } from "react-router-dom";

const ReadingListItem = ({ book, fetchReadingList }) => {
  const { user, getToken } = useKindeAuth();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const userId = user.id;
  const bookId = book.book.isbn;

  /* Delete a book for a user */

  const deleteBook = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.delete(
        `http://localhost:8080/api/books/${userId}/delete/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      fetchReadingList();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBook = async () => {
    try {
      await deleteBook();
      setIsDeleteOpen(false);
      fetchReadingList();
    } catch (error) {
      console.error(error);
    }
  };

  const clickDelete = () => {
    setIsDeleteOpen(true);
  };

  const handleModalCancelDelete = () => {
    setIsDeleteOpen(false);
  };

  /* Update a book for a user */

  const updateBook = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.put(
        `http://localhost:8080/api/books/${userId}/update/${bookId}`,
        { isRead: true },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      fetchReadingList();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateBook = async () => {
    try {
      await updateBook();
      setIsUpdateOpen(false);
      fetchReadingList();
    } catch (error) {
      console.error(error);
    }
  };

  const clickUpdate = () => {
    setIsUpdateOpen(true);
  };

  const handleModalCancelUpdate = () => {
    setIsUpdateOpen(false);
  };

  return (
    <>
      <article className="readinglist-item">
        <DeleteBookModal
          isOpen={isDeleteOpen}
          handleModalCancelDelete={handleModalCancelDelete}
          handleDeleteBook={handleDeleteBook}
        />
        <UpdateBookModal
          isOpen={isUpdateOpen}
          handleModalCancelUpdate={handleModalCancelUpdate}
          handleUpdateBook={handleUpdateBook}
        />
        <h3 className="readinglist-item__title">{book.book.title}</h3>
        <div className="readinglist-item__container">
          <div className="readinglist-item__image-container">
            <img
              src={book.book.thumbnail ? book.book.thumbnail : ImageNotFound}
              alt="Book Cover"
              className="readinglist-item__thumbnail"
            />
          </div>
          <div className="readinglist-item__details-container">
            <p className="readinglist-item__author">
              Author: {book.book.author}
            </p>
            <p className="readinglist-item__category">
              Category: {book.book.category}
            </p>
            <p className="readinglist-item__date">{`Added ${moment(
              book.addedDate
            ).fromNow()}`}</p>
            <div className="readinglist-item__icon-container">
              <div className="readinglist-item__plus-icon-container">
                <img
                  className="readinglist-item__plus-icon"
                  src={Tick}
                  onClick={clickUpdate}
                  alt="plus-icon"
                ></img>
              </div>
              <div className="readinglist-item__delete-icon-container">
                <img
                  className="readinglist-item__delete-icon"
                  src={Delete}
                  onClick={clickDelete}
                  alt="delete-icon"
                ></img>
              </div>
              <div className="readinglist-item__discussion-icon-container">
                <img
                  className="readinglist-item__discussion-icon"
                  src={Discussion}
                  alt="discussion-icon"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ReadingListItem;
