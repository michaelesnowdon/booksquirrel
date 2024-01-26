import "./ReadingListItem.scss";
import ImageNotFound from "../../assets/images/image-not-found-icon.svg";
import Tick from "../../assets/icons/tick.svg";
import moment from "moment";

const ReadingListItem = ({ book }) => {
  return (
    <>
      <article className="readinglist-item">
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
            <div className="readinglist-item__plus-icon-container">
              <img className="readinglist-item__plus-icon" src={Tick}></img>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ReadingListItem;
