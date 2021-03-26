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

    this.stars = this.stars.bind(this);
  }

  stars(count) {
    var starHTML = '';
    var count = parseInt(count);

    var i = 0;
    var max = 5;

    while (i < count) {
      starHTML += '<i class="material-icons" style="color:orange">grade</i>';
      i++;
    }

    while (max > count) {
      starHTML += '<i class="material-icons" style="color:gray">grade</i>';
      max--;
    }

    return starHTML;
  }

  componentDidMount() {

    this._isMounted = true;
    let Id = 1;

    if (window) {
      let urlParts = window.location.href.split('/');
      urlParts[urlParts.length - 1] === '' ? Id = 1 : Id = urlParts[urlParts.length - 1];
    }


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
        <Reviews reviews={this.state.reviews} stars={this.stars}/>
        <TotalReviewScore totalReviewScore={this.state.totalReviewScore} stars={this.stars}/>
      </div>
    );
  }
}

export default ReviewsComponent;