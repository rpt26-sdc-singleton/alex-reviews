import React from 'react';

const RatingGraph = (props) => {

  return (
    <div className="row">
      <div className="side">
        <div>5 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: (props.totalStars.five_star_percent * 100) + '%'}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{(props.totalStars.five_star_percent * 100).toFixed(2) + '%'}</div>
      </div>
      <div className="side">
        <div>4 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.four_star_percent * 100 + '%'}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{(props.totalStars.four_star_percent * 100).toFixed(2) + '%'}</div>
      </div>
      <div className="side">
        <div>3 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.three_star_percent * 100 + '%'}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{(props.totalStars.three_star_percent * 100).toFixed(2) + '%'}</div>
      </div>
      <div className="side">
        <div>2 stars</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.two_star_percent * 100 + '%'}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{(props.totalStars.two_star_percent * 100).toFixed(2) + '%'}</div>
      </div>
      <div className="side">
        <div>1 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar" style={{width: props.totalStars.one_star_percent * 100 + '%'}}></div>
        </div>
      </div>
      <div className="side right">
        <div>{(props.totalStars.one_star_percent * 100).toFixed(2) + '%'}</div>
      </div>
    </div>
  )
}

export default RatingGraph;