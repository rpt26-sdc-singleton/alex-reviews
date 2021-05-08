const { generateTotalReviews } = require('./totalReviewsGenerator.js');
const { generateReviews } = require('./reviewGenerator.js');

// MODELS //
const { ReviewsModel, TotalReviewsModel } = require('../models.js');

const generateCourses = (numberOfCourses) => {
  let allCourses = [];

  for (let i = 0; i < numberOfCourses; i++) {
    let newCourse = new ReviewsModel({
      courseNumber: i + 1,
      reviews: generateReviews(5)
    })

    allCourses.push(newCourse);
  }

  return allCourses;
};

console.log(generateCourses(5))
