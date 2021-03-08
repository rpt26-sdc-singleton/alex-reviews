const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => handleError(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection successful!'));

let reviewsSchema = new mongoose.Schema({
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


let totalReviewsSchema = new mongoose.Schema({
  courseNumber: Number,
  reviewCount: Number,
  totalStarScore: Number,
  fiveStarPercent: String,
  fourStarPercent: String,
  threeStarPercent: String,
  twoStarPercent: String,
  oneStarPercent: String

});

module.exports = { db, reviewsSchema, totalReviewsSchema };


