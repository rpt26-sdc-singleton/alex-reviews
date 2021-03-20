import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {

  let reviews = props.reviews;

  let reviewList = reviews.map((review) => (
    <Review key={review.reviewer} value={review}/>
  ));

  return (
    <div>{reviewList}</div>
  );

};

export default Reviews;