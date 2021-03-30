import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {

  let reviews = props.reviews;
  // let stars = props.stars;

  let reviewList = reviews.map((review) => (
    <Review key={review.reviewer} value={review} stars={props.stars} />
  ));

  return (
    <div>{reviewList}</div>
  );

};

export default Reviews;