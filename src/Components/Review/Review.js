// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../Review/Review.css";

// const Review = () => {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Fetch data from your API using Axios
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=7');
//         setData(response.data); // Assuming your API returns an array of objects
//         console.log(response.data)
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Automatically advance to next slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [data]);

//   if (data.length === 0) {
//     return <div>Loading...</div>; // Display a loading indicator while data is being fetched
//   }

//   return (
//     <div className="slider-container">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentIndex ? "active" : ""}`}
//         >
//           <div className="card">
//             <h3>{item.Name}</h3>
//             <p>{item.Company}</p>
//             <p>{item.Platform}</p>
//             <p>{item.Reviews}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Review;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Review/Review.css";

const Review = () => {
  const [reviewdata, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=7');
        setData(response.data.data); // Assuming your API returns an array of objects
        console.log(response.data.data)
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
        console.error('Error fetching data:', error);
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
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if fetching data fails
  }

  if (!Array.isArray(reviewdata) || reviewdata.length === 0) {
    return <div>No data available</div>; // Handle case where data is not an array or is empty
  }

  return (
    <div className="slider-container">
      <h3 className='reviews_heading'>Customer Reviews</h3>
      <p className='review_con_sub_heading'>What Our Customer Saying</p>
     <div className='revies_cards_container'>
     {reviewdata.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <div className="card">
            {console.log(reviewdata)}
            <h3>{item.Name}</h3>
            <p>{item.Company}</p>
            <p>{item.Platform}</p>
            <p>{item.Reviews}</p>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Review;

