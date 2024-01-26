import "./ReadingListList.scss";
import ReadingListItem from "../ReadingListItem/ReadingListItem";
import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import axios from "axios";

const ReadingListList = () => {
  const { user, getToken } = useKindeAuth();
  const [readingList, setReadingList] = useState([]);

  const userId = user.id;

  const fetchReadingList = async () => {
    try {
      const accessToken = await getToken();
      const response = await axios.get(
        `http://localhost:8080/api/books/${userId}/unread`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setReadingList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReadingList();
  }, []);

  console.log(readingList);

  return (
    <>
      <h1>Your Reading List:</h1>
      <section>
        {readingList
          .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
          .map((book) => {
            return <ReadingListItem key={book.id} book={book} />;
          })}
      </section>
    </>
  );
};

export default ReadingListList;
