const { generateCourses } = require('./coursesGenerator.js');
// const { convertFile } = require('./converters/JSON2CSV.js');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
require('dotenv').config();

const seedReviews = async () => {
  let i = 100;
  let id = 1;
  const start = console.time();

  writer = csvWriter({
    headers: ['courseNumber', 'reviews'],
    separator: '|',
  });
  writer.pipe(
    fs.createWriteStream('./db/generators/converters/reviews.csv', {
      flags: 'a',
    })
  );
  while (i > 0) {
    let data = await generateCourses(i, id);
    console.log(JSON.stringify(data.allCourseReviews[0]));
    writer.write(data.allCourseReviews[0], 'utf-8');
    i--;
    id++;
  }
  writer.end();

  const end = console.timeEnd();
};

const seedTotalReviews = async (howManyToSeed) => {
  let i = howManyToSeed;
  let id = 1;
  const start = console.time();

  writer = csvWriter({
    headers: [
      'courseNumber',
      'review_count',
      'totalStarScore',
      'fiveStarPercent',
      'fourStarPercent',
      'threeStarPercent',
      'twoStarPercent',
      'oneStarPercent',
    ],
    separator: '|',
  });
  writer.pipe(
    fs.createWriteStream('./db/generators/converters/totalReviews.csv', {
      flags: 'a',
    })
  );
  while (i > 0) {
    let data = await generateCourses(i, id);
    console.log(JSON.stringify(data.allCourseTotalReviews[0]));
    writer.write(data.allCourseTotalReviews[0], 'utf-8');
    i--;
    id++;
  }
  writer.end();

  const end = console.timeEnd();
};

console.log(seedTotalReviews(1000));
// console.log(seedReviews());
