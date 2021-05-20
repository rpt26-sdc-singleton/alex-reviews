const faker = require('faker');
const { generateReviews } = require('./reviewGenerator.js');

// HELPERS //

const summarizeReviewData = (arr) => {
  let summarizedData = { 1: null, 2: null, 3: null, 4: null, 5: null };

  let total = 0;
  for (let review of arr) {
    if (!summarizedData[review.starCount]) {
      summarizedData[review.starCount] = { total: 1 };
    } else {
      summarizedData[review.starCount]['total']++;
    }
    total += review.starCount;
  }

  summarizedData['totalStarCount'] = total;

  for (let starCount in summarizedData) {
    if (starCount === 'totalStarCount') {
      continue;
    } else {
      if (!summarizedData[starCount]) {
        summarizedData[starCount] = { total: 0, percent: '0' };
      } else {

        summarizedData[starCount]['percent'] =
        summarizedData[starCount]['total'] / summarizedData['totalStarCount'] +
        '';
      }
    }
  }

  return summarizedData;
};

const generateTotalReviews = (allReviews) => {
  let summarizedData = summarizeReviewData(allReviews);

  let totalReviewsData = {
    reviewCount: allReviews.length
  };

  for (let key in summarizedData) {
    if (key === 'totalStarCount') {
      totalReviewsData['totalStarScore'] = summarizedData[key];
    } else {
      totalReviewsData[key] = summarizedData[key]['percent'];
    }
  }

  return totalReviewsData;
};

module.exports = {
  generateTotalReviews
}
