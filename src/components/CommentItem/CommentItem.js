import "./CommentItem.scss";
import moment from "moment";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";
import { useState } from "react";
import DeleteCommentModal from "../DeleteCommentModal/DeleteCommentModal";

const CommentItem = ({ comment, fetchComments }) => {
  const { user, getToken } = useKindeAuth();
  const [isOpen, setIsOpen] = useState(false);

  const userId = user.id;

  const deleteComments = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.delete(
        `http://localhost:8080/api/comments/${userId}/comment/${comment.commentId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteComment = async () => {
    try {
      await deleteComments();
      setIsOpen(false);
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const clickDelete = () => {
    setIsOpen(true);
  };

  const handleModalCancel = () => {
    setIsOpen(false);
  };

  const isCurrentUserCommentAuthor = userId === comment.commenter;

  return (
    <>
      <article className="comment-item__container">
        <DeleteCommentModal
          isOpen={isOpen}
          handleModalCancel={handleModalCancel}
          handleDeleteComment={handleDeleteComment}
        />
        <div className="comment-item__card">
          <div className="comment-item__details">
            <p className="comment-item__name">{`${comment.user.firstName} ${comment.user.lastName}`}</p>
            <p className="comment-item__date">
              {`Posted
              ${moment(comment.createdAt).fromNow()}`}
            </p>
          </div>
          <p className="comment-item__comment">{comment.comment}</p>
          {isCurrentUserCommentAuthor && (
            <div className="comment-item__delete-icon-container">
              <img
                className="comment-item__delete-icon"
                src={Delete}
                onClick={clickDelete}
                alt="delete-icon"
              ></img>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default CommentItem;
