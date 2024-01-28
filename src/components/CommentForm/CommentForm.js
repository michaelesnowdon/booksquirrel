import "./CommentForm.scss";
import axios from "axios";
import { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const CommentForm = ({ bookId, fetchComments }) => {
  const { user, getToken } = useKindeAuth();

  const userId = user.id;

  const postComment = async (body) => {
    try {
      const accessToken = await getToken();
      const response = await axios.post(
        `http://localhost:8080/api/comments/${userId}/comment/${bookId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const [newComment, setNewComment] = useState("");
  const [inputClass, setInputClass] = useState("commentform__textarea");
  const [isInputEmpty, setIsInputEmpty] = useState(null);

  const handleNewComment = (event) => {
    setNewComment(event.target.value);
  };

  const isFormValid = () => {
    if (newComment.length <= 0) {
      setInputClass(`commentform__textarea commentform__textarea--invalid`);
      return false;
    }
    return true;
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    if (isFormValid(newComment)) {
      try {
        const postBodyComment = {
          comment: newComment,
        };
        const response = await postComment(postBodyComment);
        setNewComment("");
        const updateComments = await fetchComments();
        setInputClass("commentform__textarea");
        setIsInputEmpty(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setIsInputEmpty(true);
    }
  };

  return (
    <>
      <section className="commentform">
        <form onSubmit={handleSumbit} className="commentform__container">
          <div className="commentform__input">
            <label htmlFor="textarea" className="commentform__header">
              JOIN THE DISCUSSION
            </label>
            <textarea
              className={inputClass}
              name="newComment"
              onChange={handleNewComment}
              value={newComment}
              placeholder={
                isInputEmpty ? `Comment cannot be empty` : `Add a new comment`
              }
            ></textarea>
          </div>
          <div className="commentform__button-container">
            <button className="commentform__button">COMMENT</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CommentForm;
