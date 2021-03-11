import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/reviews/1')
      // .then(response => response.json())
      .then(response => console.log(response.json()))
      // .then(reviews => this.setState({ reviews }))
  }

  render() {
    return (
      <div>{this.state.reviews}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));