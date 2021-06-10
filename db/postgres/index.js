const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'galexy',
  host: 'localhost',
  database: 'coursera',
  port: 5432,
});

let queryString;
let percentColumnNames = [
  'review_count',
  'total_star_score',
  'five_star_percent',
  'four_star_percent',
  'three_star_percent',
  'two_star_percent',
  'one_star_percent',
];

// CREATE
const addNewReview = (courseNumber, newReview) => {
  let newReviewStar = newReview.starCount;

  queryString = `UPDATE coursera.coursera_reviews SET reviews = reviews || '${JSON.stringify(
    newReview
  )}'::jsonb WHERE course_number = '${courseNumber}';`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      let percentages = updateTotalStarData(courseNumber, newReviewStar);
      resolve(percentages);
    });
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
const updateTotalStarData = (courseNumber, newStar) => {
  let percentagesWithColumnNames = {};

  let newStarWord =
    newStar === 5
      ? 'five'
      : newStar === 4
      ? 'four'
      : newStar === 3
      ? 'three'
      : newStar === 2
      ? 'two'
      : newStar === 1
      ? 'one'
      : null;

  queryString = `SELECT (review_count, total_star_score, five_star_percent, four_star_percent, three_star_percent, two_star_percent, one_star_percent) FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}';`;

  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      let percentages = res.rows[0].row.slice(1, -1).split(',');
      percentages.forEach((el, i) => {
        if (
          percentColumnNames[i] === 'review_count' ||
          percentColumnNames[i] === 'total_star_score'
        ) {
          percentagesWithColumnNames[percentColumnNames[i]] = Number(el);
        } else {
          percentagesWithColumnNames[percentColumnNames[i]] = el;
        }
      });

      for (let i = 2; i < percentColumnNames.length; i++) {
        percentagesWithColumnNames[percentColumnNames[i] + '_proportion'] =
          percentagesWithColumnNames.review_count *
          percentagesWithColumnNames[percentColumnNames[i]];
      }

      percentagesWithColumnNames.review_count++;
      percentagesWithColumnNames.total_star_score += newStar;
      percentagesWithColumnNames[newStarWord + '_star_percent_proportion']++;

      for (let k in percentagesWithColumnNames) {
        if (
          k.includes('proportion') ||
          k === 'review_count' ||
          k === 'total_star_score'
        ) {
          continue;
        } else {
          percentagesWithColumnNames[k] =
            percentagesWithColumnNames[k + '_proportion'] /
              percentagesWithColumnNames['review_count'] +
            '';
        }
      }

      delete percentagesWithColumnNames['five_star_percent_proportion'];
      delete percentagesWithColumnNames['four_star_percent_proportion'];
      delete percentagesWithColumnNames['three_star_percent_proportion'];
      delete percentagesWithColumnNames['two_star_percent_proportion'];
      delete percentagesWithColumnNames['one_star_percent_proportion'];

      let updateAll = [];
      for (let k in percentagesWithColumnNames) {
        updateAll.push(
          pool.query(
            `UPDATE coursera.coursera_reviews SET ${k} = ${percentagesWithColumnNames[k]} WHERE course_number = '${courseNumber}';`
          )
        );
      }

      Promise.all(updateAll);
      resolve(percentagesWithColumnNames);
    });
  });
};

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
