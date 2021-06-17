const { generateTotalReviews } = require('./totalReviewsGenerator.js');
const { generateReviews } = require('./reviewGenerator.js');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const generateCourses = (courseId) => {
  // let allCourseReviews = [];
  // let allCourseTotalReviews = [];

  let generatedReviews = generateReviews(
    faker.random.number({ min: 5, max: 15 })
  );
  let newCourseReviews = {
    courseNumber: courseId,
    reviews: JSON.stringify(generatedReviews),
  };

  // allCourseReviews.push(newCourseReviews);

  let summarizedData = generateTotalReviews(generatedReviews);

  let newCourseTotalReviews = {
    // courseNumber: courseId,
    review_count: summarizedData['reviewCount'],
    totalStarScore: summarizedData['totalStarScore'],
    fiveStarPercent: summarizedData['5'],
    fourStarPercent: summarizedData['4'],
    threeStarPercent: summarizedData['3'],
    twoStarPercent: summarizedData['2'],
    oneStarPercent: summarizedData['1'],
  };

  // allCourseTotalReviews.push(newCourseTotalReviews);
  // return { allCourseReviews, allCourseTotalReviews };

  let merged = {...newCourseReviews, ...newCourseTotalReviews}
  return merged;
};

module.exports = {
  generateCourses,
};
