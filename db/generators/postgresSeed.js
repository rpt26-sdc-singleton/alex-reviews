const { generateCourses } = require('./coursesGenerator.js');
const { convertFile } = require('./converters/JSON2CSV.js');
require('dotenv').config();

const seed = async (howManyToSeed) => {
  const start = console.time()
  await generateCourses(howManyToSeed);
  await convertFile(process.env.REVIEWS_PATH, process.env.REVIEWS_OUTPUT_PATH);
  await convertFile(process.env.TOTALREVIEWS_PATH, process.env.TOTALREVIEWS_OUTPUT_PATH);
  const end = console.timeEnd();

  return [start, end];
}

console.log(seed(10000000));