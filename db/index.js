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
  // return new Promise((resolve, reject) => {
  //   TotalReviews.findOne({ courseNumber: id }, (err, results) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(results);
  //     }
  //   });
  // });

  return new Promise((resolve, reject) => {
    getUserReview(id)
      .then((data) => {
        console.log(`data: ${data}`);
        let formattedReviews = totalReviewsFormatter(data.reviews, id);
        console.log('formatted reviews:', formattedReviews);
        resolve(formattedReviews);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
        reject(err);
      });
  });
};

const totalReviewsFormatter = (reviewsArr, course) => {
  let courseNumber = course;
  let reviewCount = reviewsArr.length;
  let totalStarCount = 0;
  let overallStarRating;
  let fiveStarCount = 0;
  let fourStarCount = 0;
  let threeStarCount = 0;
  let twoStarCount = 0;
  let oneStarCount = 0;

  for (let review of reviewsArr) {
    totalStarCount += review.starCount;

    if (review.starCount === 1) {
      oneStarCount++;
    } else if (review.starCount === 2) {
      twoStarCount++;
    } else if (review.starCount === 3) {
      threeStarCount++;
    } else if (review.starCount === 4) {
      fourStarCount++;
    } else if (review.starCount === 5) {
      fiveStarCount++;
    }
  }

  let fiveStarPercent =
    ((fiveStarCount / reviewCount).toFixed(2) * 100).toFixed(2) + '%';
  let fourStarPercent =
    ((fourStarCount / reviewCount).toFixed(2) * 100).toFixed(2) + '%';
  let threeStarPercent =
    ((threeStarCount / reviewCount).toFixed(2) * 100).toFixed(2) + '%';
  let twoStarPercent =
    ((twoStarCount / reviewCount).toFixed(2) * 100).toFixed(2) + '%';
  let oneStarPercent =
    ((oneStarCount / reviewCount).toFixed(2) * 100).toFixed(2) + '%';

  overallStarRating = totalStarCount / reviewCount;

  let totalReviews = new TotalReviews({
    courseNumber: course,
    reviewCount: reviewCount,
    totalStarScore: (Math.round(overallStarRating * 10) / 10).toFixed(1),
    fiveStarPercent: fiveStarPercent,
    fourStarPercent: fourStarPercent,
    threeStarPercent: threeStarPercent,
    twoStarPercent: twoStarPercent,
    oneStarPercent: oneStarPercent,
  });

  totalReviews.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('total review data has been saved!');
    }
  });

  return totalReviews;
};

const findReviewAndUpdate = (id) => {
  let newReview = {
    starCount: Math.floor(Math.random() * (5 - 1) + 1),
    reviewer: 'alex nguyen',
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
