const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'galexy',
  host: 'localhost',
  database: 'coursera',
  port: 5432,
});

let queryString;

// CREATE
const addNewReview = (courseNumber, newReview) => {
  return new Promise((resolve, reject) => {
    queryString = `UPDATE coursera.coursera_reviews SET reviews = reviews || ${newReview} WHERE course_number = '${courseNumber}'::jsonb;`;
  });
};
// READ
const getUserReview = (courseNumber) => {
  queryString = `SELECT * FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}' LIMIT 1;`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    });
  });
};

const getTotalReviewScore = (courseNumber) => {
  queryString = `SELECT * FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}' LIMIT 1;`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    });
  });
};

const getReviewArraysLength = (courseNumber) => {
  queryString = `SELECT jsonb_array_length(reviews) from coursera.coursera_reviews WHERE course_number = '${courseNumber}';`;

  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    });
  });
};
// UPDATE
// DELETE

const findReviewAndUpdate = (courseNumber, reviewId) => {
  queryString = `SELECT reviews -> 'starCount' FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}' LIMIT 1;`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    });
  });
};
const makeAllFiveStars = () => {};
const deleteAllRecords = () => {};

const dropReviewsCollection = () => {};
const dropTotalReviewsCollection = () => {};

module.exports = {
  getUserReview,
  findReviewAndUpdate,
  makeAllFiveStars,
  deleteAllRecords,
  getTotalReviewScore,
  dropReviewsCollection,
  dropTotalReviewsCollection,
  addNewReview,
  getReviewArraysLength,
};
