import "./ReadingListItem.scss";

const ReadingListItem = ({ book }) => {
  return (
    <>
      <h1>{book.book.title}</h1>
    </>
  );
};

export default ReadingListItem;
