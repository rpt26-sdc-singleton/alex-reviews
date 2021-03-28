import React from 'react';

const TotalReviewScore = (props) => {

  return (
    <div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.stars(props.totalReviewScore.totalStarScore) }} />
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