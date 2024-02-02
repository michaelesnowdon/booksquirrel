import "./Discussion.scss";
import DiscussionBook from "../../components/DiscussionBook/DiscussionBook";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";

const Discussion = () => {
  const { bookId } = useParams();
  const { user, getToken } = useKindeAuth();

  const [comments, setComments] = useState([]);

  const userId = user.id;

  const fetchComments = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/comments/${bookId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div className="discussion">
        <DiscussionBook bookId={bookId} />
        <CommentForm bookId={bookId} fetchComments={fetchComments} />
        <CommentList comments={comments} fetchComments={fetchComments} />
      </div>
    </>
  );
};

export default Discussion;
