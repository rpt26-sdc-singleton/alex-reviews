const {
  generateCourses
} = require('../generators/coursesGenerator.js');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
require('dotenv').config();

const writer = csvWriter({
  separator: '|',
  sendHeaders: true,
});

writer.pipe(
  fs.createWriteStream('./db/generators/generatedData/merged10Million.csv', {
    flags: 'a',
  })
);
const generate10MillionReviews = (writer, encoding, callback) => {
  const start = console.time();
  let records = 10000000;
  let id = 0;

  const write = async () => {
    let ok = true;
    do {
      records -= 1;
      id += 1;
      let data = await generateCourses(id);
      if (records === 0) {
        writer.write(data, encoding);
        callback();
      } else {
        ok = writer.write(data, encoding);
      }
    } while (records > 0 && ok);
    if (records > 0) {
      writer.once('drain', write);
    }
  };
  write();
  const end = console.timeEnd();
  console.log(end);
  return end;
};

generate10MillionReviews(writer, 'utf8', () => writer.end());