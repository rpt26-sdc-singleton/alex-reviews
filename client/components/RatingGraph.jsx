import React from 'react';

const RatingGraph = (props) => {

  return (
    <div className="row">
      <div className="side">
        <div>5 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.fiveStarPercent}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{props.totalStars.fiveStarPercent}</div>
      </div>
      <div className="side">
        <div>4 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.fourStarPercent}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{props.totalStars.fourStarPercent}</div>
      </div>
      <div className="side">
        <div>3 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.threeStarPercent}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{props.totalStars.threeStarPercent}</div>
      </div>
      <div className="side">
        <div>2 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.twoStarPercent}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{props.totalStars.twoStarPercent}</div>
      </div>
      <div className="side">
        <div>1 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.oneStarPercent}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{props.totalStars.oneStarPercent}</div>
      </div>
    </div>
  )
}

export default RatingGraph;