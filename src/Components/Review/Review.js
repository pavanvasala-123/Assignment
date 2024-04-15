import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Review/Review.css";
import StarIcon from '@mui/icons-material/Star';

const Review = () => {
  const [reviewdata, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=7"
        );
        setData(response.data.data); 
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewdata.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewdata.length);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [reviewdata]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;   }

  if (!Array.isArray(reviewdata) || reviewdata.length === 0) {
    return <div>No data available</div>; 
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          style={{ color: i < rating ? '#ffc107' : '#e4e5e9' }}
          
        />
      );
    }
    return stars;
  };

  return (
    <div className="slider-container">
      <h3 className="reviews_heading">Customer Reviews</h3>
      <p className="review_con_sub_heading">What Our Customer Saying</p>
      <div className="revies_cards_container">
        {reviewdata.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <div className="card">
              <h3 className="reviewer_name">{item.Name}</h3>
              <p>{item.Company}</p>
              <p>{item.Platform}</p>
              <div className="rating">{renderStars(item.rating)}</div>
              <p className="review">{item.Reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
