import "./Discussion.scss";
import DiscussionBook from "../../components/DiscussionBook/DiscussionBook";
import { useParams } from "react-router-dom";

const Discussion = () => {
  const { bookId } = useParams();

  console.log(bookId);

  return (
    <>
      <div className="discussion">
        <DiscussionBook bookId={bookId} />
      </div>
    </>
  );
};

export default Discussion;
