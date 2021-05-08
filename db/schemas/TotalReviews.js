const mongoose = require('mongoose');

const totalReviewsSchema = new mongoose.Schema({
  courseNumber: { type: Number, required: true },
  reviewCount: { type: Number, required: true },
  totalStarScore: { type: String, required: true },
  fiveStarPercent: { type: String, required: true },
  fourStarPercent: { type: String, required: true },
  threeStarPercent: { type: String, required: true },
  twoStarPercent: { type: String, required: true },
  oneStarPercent: { type: String, required: true },
});

module.exports = totalReviewsSchema;