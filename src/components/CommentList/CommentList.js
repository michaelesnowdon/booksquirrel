import "./CommentList.scss";
import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ comments }) => {
  return (
    <>
      <section className="comment-list__container">
        {comments
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />;
          })}
      </section>
    </>
  );
};

export default CommentList;
