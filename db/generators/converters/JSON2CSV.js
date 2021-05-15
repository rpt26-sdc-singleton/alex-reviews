const { createReadStream, createWriteStream } = require('fs');
const fs = require('fs').promises;

const convertReviews = (filePath) => {};

const convertTotalReviews = async (filePath) => {
  let jsonData = await fs.readFile(filePath);

  jsonData = JSON.parse(jsonData);

  const headers = Object.keys(jsonData[0]);

  let csvValues = '';

  jsonData.forEach((el) => {
    let values = Object.values(el);
    values = values.join(',') + '\n';

    csvValues += values;

    console.log(csvValues);
  });

  let transformed = headers + '\n' + csvValues;
  console.log(transformed);

  fs.writeFile(__dirname + '/totalReviewsConverted.csv', transformed, (err, data) => {
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

convertTotalReviews(
  '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/totalreviews.json'
);
