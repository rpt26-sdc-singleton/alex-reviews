const mongoose = require('mongoose');
const { reviewsSchema } = require('./schemas/Reviews.js');
const { totalReviewsSchema } = require('./schemas/TotalReviews.js');

const ReviewsModel = mongoose.model('Reviews', reviewsSchema);

const TotalReviewsModel = mongoose.model('TotalReviews', totalReviewsSchema);

module.exports = {
  ReviewsModel,
  TotalReviewsModel,
}