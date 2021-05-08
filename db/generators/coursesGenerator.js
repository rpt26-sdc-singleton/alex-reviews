const { generateTotalReviews } = require('./totalReviewsGenerator.js');
const { generateReviews } = require('./reviewGenerator.js');
const faker = require('faker');

const generateCourses = (numberOfCourses) => {
  let allCourseReviews = [];
  let allCourseTotalReviews = [];

  for (let i = 0; i < numberOfCourses; i++) {
    let generatedReviews = generateReviews(faker.random.number({min: 25, max: 100}));

    let newCourseReviews = {
      courseNumber: i + 1,
      reviews: generatedReviews,
    };

    allCourseReviews.push(newCourseReviews);

    let summarizedData = generateTotalReviews(generatedReviews);

    let newCourseTotalReviews = {
      courseNumber: i + 1,
      reviewCount: summarizedData['reviewCount'],
      totalStarScore: summarizedData['totalStarScore'],
      fiveStarPercent: summarizedData['5'],
      fourStarPercent: summarizedData['4'],
      threeStarPercent: summarizedData['3'],
      twoStarPercent: summarizedData['2'],
      oneStarPercent: summarizedData['1'],
    };

    allCourseTotalReviews.push(newCourseTotalReviews);
  }

  return { allCourseReviews, allCourseTotalReviews };
};

// console.log(generateCourses(5))

module.exports = {
  generateCourses,
};
