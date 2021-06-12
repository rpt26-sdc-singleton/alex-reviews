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

  return new Promise((resolve, reject) => {
    return getReviewArraysLength(courseNumber)
      .then((length) => {
        newReview['_id'] = length + 1;
        // console.log(newReview);
      })
      .then(() => {
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
      })
      .then((finishedQuery) =>
        console.log('finished: ', {
          newlyAddedReview: newReview,
          newTotalData: finishedQuery,
        })
      )
      .catch((err) => reject(err));
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
  queryString = `SELECT jsonb_path_query(reviews, '$.size()') from coursera.coursera_reviews WHERE course_number = '${courseNumber}';`;

  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows[0].jsonb_path_query);
    });
  });
};

const getLastReview = (courseNumber) => {
  queryString = `SELECT reviews->-1 last_review FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}';`;

  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows[0]['last_review']);
    });
  });
};

// UPDATE
const updateTotalStarData = (courseNumber, newStar, deletion) => {
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
      if (deletion) {
        percentagesWithColumnNames.review_count--;
        percentagesWithColumnNames.total_star_score -= newStar;
        percentagesWithColumnNames[newStarWord + '_star_percent_proportion']--;
      } else {
        percentagesWithColumnNames.review_count++;
        percentagesWithColumnNames.total_star_score += newStar;
        percentagesWithColumnNames[newStarWord + '_star_percent_proportion']++;
      }
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
// helper to fix mass updates in development for rougue queries //
const forceUpdateTotalStarData = (courseNumber) => {
  queryString = `SELECT jsonb_path_query_array(reviews, '$[*].starCount') FROM coursera.coursera_reviews WHERE course_number = '${courseNumber}';`;
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      let stars = res.rows[0].jsonb_path_query_array;

      let counting = {};
      stars.forEach((el) => {
        if (counting[el]) {
          counting[el]++;
        } else {
          counting[el] = 1;
        }

        if (counting['total']) {
          counting['total']++;
        } else {
          counting['total'] = 1;
        }

        if (counting['totalStars']) {
          counting['totalStars'] += el;
        } else {
          counting['totalStars'] = el;
        }
      });

      let one_star_percent = counting[1] ? counting[1] / counting['total'] : 0;
      let two_star_percent = counting[2] ? counting[2] / counting['total'] : 0;
      let three_star_percent = counting[3]
        ? counting[3] / counting['total']
        : 0;
      let four_star_percent = counting[4] ? counting[4] / counting['total'] : 0;
      let five_star_percent = counting[5] ? counting[5] / counting['total'] : 0;

      pool.query(
        `
      UPDATE coursera.coursera_reviews
      SET
      one_star_percent = ${one_star_percent},
      two_star_percent = ${two_star_percent},
      three_star_percent = ${three_star_percent},
      four_star_percent = ${four_star_percent},
      five_star_percent = ${one_star_percent},
      review_count = ${counting['total']},
      total_star_score = ${counting['totalStars']}
      WHERE course_number = '${courseNumber}';
      `,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve({
            one_star_percent,
            two_star_percent,
            three_star_percent,
            four_star_percent,
            five_star_percent,
            total_star_score: counting['totalStars'],
            review_count: counting['total'],
          });
        }
      );
    });
  });
};

// DELETE
const deleteLastReview = async (courseNumber) => {
  let lastReview = await getLastReview(courseNumber);
  let lastReviewStar = lastReview.starCount;

  queryString = `UPDATE coursera.coursera_reviews SET reviews = reviews #- '{-1}' WHERE course_number = '${courseNumber}';`;

  return new Promise((resolve, reject) => {
    pool.query(queryString, async (err, res) => {
      if (err) {
        reject(err);
      }
      await updateTotalStarData(courseNumber, lastReviewStar, true);
      resolve(lastReview);
    });
  });
};

module.exports = {
  getUserReview,
  getTotalReviewScore,
  addNewReview,
  getReviewArraysLength,
  getLastReview,
  deleteLastReview,
  forceUpdateTotalStarData,
};
