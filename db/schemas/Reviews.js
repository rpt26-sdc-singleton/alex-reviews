const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  courseNumber: Number,
  reviews: [
    {
      starCount: {
        type: Number,
        min: [1, '0 stars not allowed'],
        max: 5,
        required: true,
      },
      reviewer: { type: String, required: true },
      reviewDate: { type: String, required: true },
      reviewText: { type: String, required: true },
      _id: Number,
    },
  ],
});

module.exports = { reviewsSchema };
