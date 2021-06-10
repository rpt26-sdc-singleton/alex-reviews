import React from 'react';
import RatingGraph from './RatingGraph.jsx';

const TotalReviewScore = (props) => {
  return (
    <div className="overview-container">
      <div>
        <div className="reviews-overview">
          <div className="total-review-score">{props.totalReviewScore.review_count}</div>
          <div className="review-box">
            <div className="stars" dangerouslySetInnerHTML={{ __html: props. stars(props.totalReviewScore.total_star_score / props.totalReviewScore.review_count) }} />
            <div className="" >{props.totalReviewScore.reviewCount}  reviews</div>
          </div>
        </div>
      </div>
      <RatingGraph totalStars={props.totalReviewScore} />
    </div>
  );
};

export default TotalReviewScore;