import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.fetchReviews = this.fetchReviews.bind(this);
  }

  fetchReviews() {
    fetch('http://localhost:3007/api/userReviews/1')
      .then(response => response.json())
      .then(data => this.setState({ reviews: data }))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    return (
      <div>Reviews go here!</div>
    );
  }
}

export default App;