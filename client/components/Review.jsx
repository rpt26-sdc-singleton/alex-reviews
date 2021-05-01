import React from 'react';

const Review = (props) => {
  let reviewerNameParts = props.value.reviewer.split(' ');
  let firstInitial = reviewerNameParts[0].slice(0, 1).toUpperCase();
  let lastInitial = reviewerNameParts[1].slice(0, 1).toUpperCase();
  let initials = firstInitial + lastInitial;

  return (
    <div className="individual-review">
      <div className="individual-review-stars" dangerouslySetInnerHTML={{__html: props.stars(props.value.starCount)}}/>
      <div className="reviewer">{'by ' + initials + ' ' + props.value.reviewDate}</div>
      <div>{props.value.reviewText}</div>
    </div>
  );
};

export default Review;