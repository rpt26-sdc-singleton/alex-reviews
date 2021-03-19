import React from 'react';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseNumber: 1,
      reviews: []
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

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <Reviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App;