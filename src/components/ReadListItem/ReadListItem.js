import "./ReadListItem.scss";
import ImageNotFound from "../../assets/images/image-not-found-icon.svg";
import Discussion from "../../assets/icons/comment2.svg";
import moment from "moment";
import { Link } from "react-router-dom";

const ReadListItem = ({ book }) => {
  return (
    <>
      <article className="readlist-item">
        <h3 className="readlist-item__title">{book.book.title}</h3>
        <div className="readlist-item__container">
          <div className="readlist-item__image-container">
            <img
              src={book.book.thumbnail ? book.book.thumbnail : ImageNotFound}
              alt="Book Cover"
              className="readlist-item__thumbnail"
            />
          </div>
          <div className="readlist-item__details-container">
            <p className="readlist-item__author">Author: {book.book.author}</p>
            <p className="readlist-item__category">
              Category: {book.book.category}
            </p>
            <p className="readlist-item__date">{`Added ${moment(
              book.addedDate
            ).fromNow()}`}</p>
            <div className="readlist-item__icon-container">
              <div className="readlist-item__discussion-icon-container">
                <img
                  className="readlist-item__discussion-icon"
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

export default ReadListItem;
