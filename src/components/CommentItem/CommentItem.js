import "./CommentItem.scss";
import moment from "moment";

const CommentItem = ({ comment }) => {
  return (
    <>
      <article className="comment-item__container">
        <div className="comment-item__card">
          <div className="comment-item__details">
            <p className="comment-item__name">{`${comment.user.firstName} ${comment.user.lastName}`}</p>
            <p className="comment-item__date">
              {`Posted
              ${moment(comment.createdAt).fromNow()}`}
            </p>
          </div>
          <p className="comment-item__comment">{comment.comment}</p>
        </div>
      </article>
    </>
  );
};

export default CommentItem;
