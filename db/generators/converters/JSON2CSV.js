const { createReadStream, createWriteStream } = require('fs');
const fs = require('fs');
const converter = require('json-2-csv');

// const convertReviews = async (filePath, outputPath) => {
//   let jsonData = await fs.promises.readFile(filePath);

//   jsonData = JSON.parse(jsonData);

//   const headers = Object.keys(jsonData[0]);

//   let csvValues = [];

//   await jsonData.forEach((el) => {
//     let values = '';
//     values += `"${el.courseNumber}"|${
//       el.reviews.map(obj => {
//         let transformer = [];

//       })
//     }`;

//     csvValues.push(values);
//   });

//   csvValues = csvValues.join('\n')

//   let transformed = headers.join('|') + '\n' + csvValues;
//   // console.log(transformed);

//   fs.promises.writeFile(outputPath, transformed, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('done writing csv file!');
//     }
//   });
// };

// const convertTotalReviews = async (filePath, outputPath) => {
//   let jsonData = await fs.promises.readFile(filePath);

//   jsonData = JSON.parse(jsonData);

//   const headers = Object.keys(jsonData[0]);

//   let csvValues = '';

//   jsonData.forEach((el) => {
//     let values = Object.values(el);
//     values = values.join('|') + '\n';

//     csvValues += values;

//     // console.log(csvValues);
//   });

//   let transformed = headers.join('|') + '\n' + csvValues;
//   // console.log(transformed);

//   fs.promises.writeFile(outputPath, transformed, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('done writing csv file!');
//     }
//   });
// };

// // try using streams

// // const convertTotalReviews = filePath => {
// //   const readStream = fs.createReadStream(filePath);
// //   const writeStream = fs.createWriteStream(__dirname + '/convertedToCSV.csv')

// // }

// //test //
// convertTotalReviews(
//   '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/totalreviews.json',
//   __dirname + '/totalReviewsConverted.csv'
// );

// convertReviews(
//   '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/reviews.json',
//   __dirname + '/reviewsConverted.csv'
// );


const convertFile = (filepath, outputPath) => {
  // const jsonData = JSON.parse(fs.promises.readFile(filepath));

  // converter.json2csv(
  //   jsonData,
  //   (err, csv) => {
  //     if (err) {
  //       throw err;
  //     }

  //     fs.promises.writeFile(outputPath, csv);
  //   },
  //   { delimiter: {field: '|'} }
  // );

  fs.promises.readFile(filepath, (err, data) => {
    converter.json2csv(data, (err, csv) => {
      if (err) {
        throw err;
      }

      fs.promises.writeFile(outputPath, csv)
    }, {delimiter: {field:'|'}})
  });
};

module.exports = {
  convertFile
}

