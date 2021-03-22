import React from 'react';
import Reviews from './Reviews.jsx';
import TotalReviewScore from './TotalReviewScore.jsx';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseNumber: 1,
      reviews: [],
      totalReviewScore: {}
    };

  }

  componentDidMount() {

    this._isMounted = true;

    let urlParts = window.location.href.split('/');
    let Id;
    urlParts[urlParts.length - 1] === '' ? Id = 1 : Id = urlParts[urlParts.length - 1];

    fetch(`http://localhost:3007/api/userReviews/${Id}`)
      .then(response => response.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ reviews: data.reviews });
        }

      })
      .catch(error => console.log(error));

    fetch(`http://localhost:3007/api/totalReviewScore/${Id}`)
      .then(response => response.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ totalReviewScore: data });
        }

      })
      .catch(error => console.log(error));

  }


  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <Reviews reviews={this.state.reviews}/>
        <TotalReviewScore totalReviewScore={this.state.totalReviewScore}/>
      </div>
    );
  }
}

export default ReviewsComponent;