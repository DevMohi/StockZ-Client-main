import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import Review from "../Review/Review";

import "./Reviews.css";

const Reviews = () => {
  let loadingElement = <Loading></Loading>;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://stockz-server.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="custom-clr display-5 text-center title">Customer Says!</h1>
      <div className="row">
        {reviews.length === 0
          ? loadingElement
          : reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
      </div>
      <div className="d-flex justify-content-end pb-5">
        <Link to="/addreview">
          <button
            className="btn"
            style={{
              backgroundColor: "#72adf1",
              borderRadius: "10px",
              border: "none",
              color: "white",
            }}
          >
            Add Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
