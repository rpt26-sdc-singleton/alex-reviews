import React from 'react';

const Review = (props) => {
  let reviewerNameParts = props.value.reviewer.split(' ');
  let firstInitial = reviewerNameParts[0].slice(0, 1);
  let lastInitial = reviewerNameParts[1].slice(0, 1);
  let initials = firstInitial + lastInitial;

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: props.stars(props.value.starCount)}}/>
      <div>{'by ' + initials + ' ' + props.value.reviewDate}</div>
      <div>{props.value.reviewText}</div>
    </div>
  );
};

export default Review;