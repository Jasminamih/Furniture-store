import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage-h1">Error 404</h1>
      <p className="ErrorPage-p">
        You reached a dead end. Go back to the{" "}
        <Link className="ErrorPage-link" to="/">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
