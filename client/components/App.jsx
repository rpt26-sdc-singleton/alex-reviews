import React from 'react';
import Reviews from './Reviews.jsx';
import TotalReviewScore from './TotalReviewScore.jsx';

class App extends React.Component {
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

    fetch('http://localhost:3007/api/userReviews/1')
      .then(response => response.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ reviews: data.reviews });
        }

      })
      .catch(error => console.log(error));

    fetch('http://localhost:3007/api/totalReviewScore/1')
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

export default App;