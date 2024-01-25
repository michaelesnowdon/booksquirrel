import "./BookResult.scss";
import ImageNotFound from "../../assets/images/image-not-found-icon.svg";

function BookResult({ book }) {
  // Extract book details to variables
  const { title, authors, categories, description, imageLinks, pageCount } =
    book;

  // Extract ISBN-13 if available
  const isbn13 =
    book.industryIdentifiers &&
    book.industryIdentifiers.find(
      (identifier) => identifier.type === "ISBN_13"
    );

  const postIsbn = isbn13.identifier;
  const postTitle = title;
  const postAuthor = authors[0];
  const postCategory = categories ? categories.join(", ") : "N/A";
  const postDesc = description;
  const postThumbnail =
    imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : "";
  const postPageCount = pageCount;

  // console.log(postIsbn);
  // console.log(postTitle);
  // console.log(postAuthor);
  // console.log(postCategory);
  // console.log(postDesc);
  // console.log(postThumbnail);
  // console.log(postPageCount);

  return (
    <article className="bookresult">
      <h3 className="bookresult__title">{title}</h3>
      <div className="bookresult__container">
        <div className="bookresult__image-container">
          <img
            src={imageLinks.thumbnail ? imageLinks.thumbnail : ImageNotFound}
            alt="Book Cover"
            className="bookresult__thumbnail"
          />
        </div>
        <div className="bookresult__details-container">
          <p className="bookresult__author">
            Author: {authors ? authors.join(", ") : "N/A"}
          </p>
          <p className="bookresult__category">
            Category: {categories ? categories.join(", ") : "N/A"}
          </p>
          <p className="bookresult__description">{description || "N/A"}</p>
          <button className="bookresult__button">Add to Reading List</button>
        </div>
      </div>
    </article>
  );
}

export default BookResult;
