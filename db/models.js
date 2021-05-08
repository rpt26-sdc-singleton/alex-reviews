const mongoose = require('mongoose');
const { reviewsSchema, totalReviewsSchema } = require('./schemas');

const ReviewsModel = mongoose.model('Reviews', reviewsSchema);

const TotalReviewsModel = mongoose.model('TotalReviews', totalReviewsSchema);

module.exports = {
  ReviewsModel,
  TotalReviewsModel,
}