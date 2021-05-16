const { createReadStream, createWriteStream } = require('fs');
const fs = require('fs').promises;

const convertReviews = async (filePath, outputPath) => {
  let jsonData = await fs.readFile(filePath);

  jsonData = JSON.parse(jsonData);

  const headers = Object.keys(jsonData[0]);

  let csvValues = '';

  jsonData.forEach(el => {
    let values = '';
    values += el.courseNumber + '|' + JSON.stringify(el.reviews);

    csvValues += values;
  })

  let transformed = headers.join('|') + '\n' + csvValues;
  console.log(transformed);

  fs.writeFile(outputPath, transformed, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('done writing csv file!')
    }
  })
};

const convertTotalReviews = async (filePath, outputPath) => {
  let jsonData = await fs.readFile(filePath);

  jsonData = JSON.parse(jsonData);

  const headers = Object.keys(jsonData[0]);

  let csvValues = '';

  jsonData.forEach((el) => {
    let values = Object.values(el);
    values = values.join('|') + '\n';

    csvValues += values;

    // console.log(csvValues);
  });

  let transformed = headers.join('|') + '\n' + csvValues;
  console.log(transformed);

  fs.writeFile(outputPath, transformed, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('done writing csv file!')
    }
  })
};

// try using streams

// const convertTotalReviews = filePath => {
//   const readStream = fs.createReadStream(filePath);
//   const writeStream = fs.createWriteStream(__dirname + '/convertedToCSV.csv')

// }


//test //
convertTotalReviews(
  '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/totalreviews.json'
,__dirname + '/totalReviewsConverted.csv');

convertReviews(
  '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/reviews.json'
,__dirname + '/reviewsConverted.csv');

module.exports = {
  convertReviews,
  convertTotalReviews
}