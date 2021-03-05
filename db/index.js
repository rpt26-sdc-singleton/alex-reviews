const server = require('../server/index.js');
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

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

let Reviews = mongoose.model('Reviews', reviewsSchema);

var courseNumber = 1;

let saveReviews = (course) => {
  console.log('called');
  var reviewCount = Math.floor(Math.random() * 100);

  var reviewsGenerator = (count) => {
    var reviews = [];

    for (var i = 0; i < count; i++) {
      var review = {};
      review.starCount = Math.floor(Math.random() * 6);
      review.reviewer = faker.name.findName();
      review.reviewDate = faker.date.recent();
      review.reviewText = faker.lorem.paragraph();
      reviews.push(review);
    }

    return reviews;
  };

  var reviews = new Reviews({
    courseNumber: course,
    Reviews: reviewsGenerator(reviewCount)
  });

  reviews.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Reviews have been saved!');
    }
  });

};

let seedReviews = (done) => {
  for (var i = 0; i < 100; i++) {
    saveReviews(courseNumber);
    courseNumber += 1;
  }

  done();
};

// seedReviews(err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Database has been seeded!');
//   }
// });

// let totalReviewsSchema = new mongoose.Schema({
//   courseNumber: Number,
//   reviewCount: Number,
//   totalStarScore: Number,
//   fiveStarPercent: String,
//   fourStarPercent: String,
//   threeStarPercent: String,
//   twoStarPercent: String,
//   oneStarPercent: String

// });

// let TotalReviews = mongoose.model('TotalReviews', totalReviewsSchema);

module.exports.seedReviews = seedReviews;


