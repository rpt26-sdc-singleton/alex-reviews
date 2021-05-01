const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/reviews', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => handleError(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection successful!'));

let reviewsSchema = new mongoose.Schema({
  courseNumber: Number,
  reviews: [
    {
      _id: Number,
      starCount: Number,
      reviewer: String,
      reviewDate: String,
      reviewText: String,
    },
  ],
});

let totalReviewsSchema = new mongoose.Schema({
  courseNumber: Number,
  reviewCount: Number,
  totalStarScore: String,
  fiveStarPercent: String,
  fourStarPercent: String,
  threeStarPercent: String,
  twoStarPercent: String,
  oneStarPercent: String,
});

const Reviews = mongoose.model('Reviews', reviewsSchema);
const TotalReviews = mongoose.model('TotalReviews', totalReviewsSchema);

const getUserReview = function (id) {
  return new Promise((resolve, reject) => {
    Reviews.findOne({ courseNumber: id }, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getTotalReviewScore = function (id) {
  return new Promise((resolve, reject) => {
    TotalReviews.findOne({ courseNumber: id }, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const findReviewAndUpdate = (id) => {
  let newReview = {
    starCount: Math.floor(Math.random() * (5 - 1) + 1),
    reviewer: 'alex',
    reviewText: 'testing text',
    reviewDate: 'test date',
  };
  return new Promise((resolve, reject) => {
    Reviews.findOneAndUpdate(
      { courseNumber: id },
      { $push: { reviews: newReview } },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  db: db,
  getUserReview: getUserReview,
  getTotalReviewScore: getTotalReviewScore,
  findReviewAndUpdate: findReviewAndUpdate,
};
