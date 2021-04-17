const db = require('./index.js');
const faker = require('faker');
const mongoose = require('mongoose');

let Reviews = mongoose.model('Reviews', db.reviewsSchema);
let TotalReviews = mongoose.model('TotalReviews', db.totalReviewsSchema);

var courseNumber = 1;
var reviewCount = Math.floor(Math.random() * (30 - 1) + 1);
var totalStarCount = 0;
var overallStarRating;
var fiveStarCount = 0;
var fourStarCount = 0;
var threeStarCount = 0;
var twoStarCount = 0;
var oneStarCount = 0;

if (reviewCount === 0 || typeof overallStarRating !== 'number') {
  overallStarRating = 1;
}

var getRandomDate = () => {
  var getDaysArray = function (start, end) {
    for (var dates = [], date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      dates.push(new Date(date));
    }
    return dates;
  };

  var firstCourseraReview = '2012-08-01';

  var daylist = getDaysArray(new Date(firstCourseraReview), new Date());
  daylist.map((day) => day.toISOString().slice(0, 10)).join('');

  var randomIndex = Math.floor(Math.random() * daylist.length);
  var randomDate = daylist[randomIndex].toString();
  var dateParts = randomDate.split(' ');
  var month = dateParts[1];
  var day = dateParts[2][0] === '0' ? dateParts[2].slice(1) : dateParts[2];
  var year = dateParts[3];

  return month + ' ' + day + ', ' + year;

};

let saveReviews = (course) => {

  var reviewsGenerator = (count) => {
    var reviews = [];

    for (var i = 0; i < count; i++) {
      var review = {};
      review.starCount = Math.floor(Math.random() * 5 + 1);
      totalStarCount += review.starCount;
      if (review.starCount === 5) {
        fiveStarCount += 1;
      } else if (review.starCount === 4) {
        fourStarCount += 1;
      } else if (review.starCount === 3) {
        threeStarCount += 1;
      } else if (review.starCount === 2) {
        twoStarCount += 1;
      } else {
        oneStarCount += 1;
      }
      review.reviewer = faker.name.findName();
      review.reviewDate = getRandomDate();
      review.reviewText = faker.lorem.paragraph();
      reviews.push(review);
    }

    return reviews;
  };

  var reviews = new Reviews({
    courseNumber: course,
    reviews: reviewsGenerator(reviewCount)
  });

  reviews.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Reviews have been saved!');
    }
  });

};

let getTotalReviews = (course) => {

  if (reviewCount === 0 || typeof overallStarRating !== 'number') {
    overallStarRating = 1;
  }

  var fiveStarPercent = (((fiveStarCount / reviewCount).toFixed(2)) * 100).toFixed(2) + '%';
  var fourStarPercent = (((fourStarCount / reviewCount).toFixed(2)) * 100).toFixed(2) + '%';
  var threeStarPercen = (((threeStarCount / reviewCount).toFixed(2)) * 100).toFixed(2) + '%';
  var twoStarPercent = (((twoStarCount / reviewCount).toFixed(2)) * 100).toFixed(2) + '%';
  var oneStarPercent = (((oneStarCount / reviewCount).toFixed(2)) * 100).toFixed(2) + '%';

  var totalReviews = new TotalReviews({
    courseNumber: course,
    reviewCount: reviewCount,
    totalStarScore: (Math.round(overallStarRating * 10) / 10).toFixed(1),
    fiveStarPercent: fiveStarPercent ,
    fourStarPercent: fourStarPercent,
    threeStarPercent: threeStarPercen,
    twoStarPercent: twoStarPercent,
    oneStarPercent: oneStarPercent
  })

  totalReviews.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('total review data has been saved!');
    }
  });
}

  let seedReviews = async (done) => {
  for (var i = 0; i < 100; i++) {
    await saveReviews(courseNumber);
    overallStarRating = totalStarCount / reviewCount;
    if (overallStarRating === 'NaN') {
      console.log('totalStarCount', totalStarCount, 'reviewCount', reviewCount);
    }
    await getTotalReviews(courseNumber);
    courseNumber += 1;
    reviewCount = Math.floor(Math.random() * (30 - 1) + 1);
    totalStarCount = 0;
    overallStarRating;
    fiveStarCount = 0;
    fourStarCount = 0;
    threeStarCount = 0;
    twoStarCount = 0;
    oneStarCount = 0;
  }

  done();
};

seedReviews(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database has been seeded!');
  }
});

