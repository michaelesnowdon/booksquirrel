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
    <article className="bookresult__card">
      <h3>{title}</h3>
      <img
        src={imageLinks.thumbnail ? imageLinks.thumbnail : ImageNotFound}
        alt="Book Cover"
      />
      <p>Author: {authors ? authors.join(", ") : "N/A"}</p>
      <p>Category: {categories ? categories.join(", ") : "N/A"}</p>
      <p>Description: {description || "N/A"}</p>
      <p>ISBN-13: {isbn13 ? isbn13.identifier : "N/A"}</p>
      <button>Add to Reading List</button>
    </article>
  );
}

export default BookResult;
