import React from 'react';
import RatingGraph from './RatingGraph.jsx';

const TotalReviewScore = (props) => {

  return (
    <div>
      <div>
        <div>
          <div className="rc-ReviewsOverview__totals__rating">{props.totalReviewScore.totalStarScore}</div>
          <div className="totalStars" dangerouslySetInnerHTML={{ __html: props.stars(props.totalReviewScore.totalStarScore) }} />
          <div className="reviewCount" >{props.totalReviewScore.reviewCount} reviews</div>
        </div>
      </div>
      <RatingGraph totalStars={props.totalReviewScore} />
    </div>
  );
};

export default TotalReviewScore;