import "./PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1 className="not-found_title">Page Not Found</h1>
        <Link to="/" className="not-found__link">
          <button className="not-found__button">Return Home</button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
