const server = require('../server/index.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection successful!'));

let totalReviewsSchema = new mongoose.Schema({
  _id: Number,
  courseNumber: Number,
  reviewCount: Number,
  totalStarScore: Number,
  fiveStarPercent: String,
  fourStarPercent: String,
  threeStarPercent: String,
  twoStarPercent: String,
  oneStarPercent: String

});

let TotalReviews = mongoose.model('TotalReviews', totalReviewsSchema);

let reviewsSchema = new mongoose.Schema({
  _id: Number,
  courseNumber: Number,
  Reviews: [
    {
      _id: Number,
      starCount: Number,
      reviewer: String,
      reviewDate: String,
      reviewText: String
    }
  ]
});

let Reviews = mongoose.model('Reviews', reviewsSchema);


