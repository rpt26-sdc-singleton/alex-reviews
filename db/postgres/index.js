const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'galexy',
  host: 'localhost',
  database: 'coursera',
  port: 5432,
});

// CREATE
// READ
const getUserReview = (courseNumber) => {
  let queryString = `SELECT * FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}' LIMIT 1;`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    })
  });
};

const getTotalReviewScore = (courseNumber) => {
  let queryString = `SELECT * FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}' LIMIT 1;`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows)
    });
  });
};
// UPDATE
// DELETE

const findReviewAndUpdate = () => {}; // use postgres concat
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
};
