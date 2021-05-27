const { generateTotalReviews } = require('./totalReviewsGenerator.js');
const { generateReviews } = require('./reviewGenerator.js');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const generateCourses = async (numberOfCourses, courseId) => {
  let allCourseReviews = [];
  let allCourseTotalReviews = [];

  for (let i = 0; i < numberOfCourses; i++) {
    let generatedReviews = generateReviews(
      faker.random.number({ min: 25, max: 100 })
    );

    let newCourseReviews = {
      courseNumber: courseId,
      reviews: JSON.stringify(generatedReviews),
    };

    allCourseReviews.push(newCourseReviews);

    let summarizedData = generateTotalReviews(generatedReviews);

    let newCourseTotalReviews = {
      courseNumber: courseId,
      review_count: summarizedData['reviewCount'],
      totalStarScore: summarizedData['totalStarScore'],
      fiveStarPercent: summarizedData['5'],
      fourStarPercent: summarizedData['4'],
      threeStarPercent: summarizedData['3'],
      twoStarPercent: summarizedData['2'],
      oneStarPercent: summarizedData['1'],
    };

    allCourseTotalReviews.push(newCourseTotalReviews);
  }

  let reviewPath = `${__dirname}/seededData/reviews.json`;
  let totalReviewPath = `${__dirname}/seededData/totalreviews.json`;
  const writeReviews = () => {
    fs.writeFile(
      reviewPath,
      JSON.stringify(allCourseReviews, null, '\t'),
      (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('completed generating review data');
        }
      }
    );
  };

  await writeReviews();

  const writeTotalReviews = () => {
    fs.writeFile(
      totalReviewPath,
      JSON.stringify(allCourseTotalReviews, null, '\t'),
      (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('completed generating total review data');
        }
      }
    );
  };

  await writeTotalReviews();

  return { allCourseReviews, allCourseTotalReviews };
};

module.exports = {
  generateCourses,
};
