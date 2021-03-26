import React from 'react';

const TotalReviewScore = (props) => {
  let starHTML = props.stars(props.totalReviewScore.totalStarScore);
  return (
    <div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: starHTML }}></div>
        <div>{props.totalReviewScore.totalStarScore}</div>
        <div>{props.totalReviewScore.reviewCount}</div>
      </div>
      <div>{props.totalReviewScore.fiveStarPercent}</div>
      <div>{props.totalReviewScore.fourStarPercent}</div>
      <div>{props.totalReviewScore.threeStarPercent}</div>
      <div>{props.totalReviewScore.twoStarPercent}</div>
      <div>{props.totalReviewScore.oneStarPercent}</div>
    </div>
  );
};

export default TotalReviewScore;