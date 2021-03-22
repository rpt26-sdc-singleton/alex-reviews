import React from 'react';

const TotalReviewScore = (props) => {

  return (
    <div>
      <div>
        {props.totalReviewScore.totalStarScore}
        {props.totalReviewScore.reviewCount}
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