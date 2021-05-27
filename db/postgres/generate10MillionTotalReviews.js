const { generateCourses } = require('../generators/coursesGenerator.js');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
require('dotenv').config();

const writer = csvWriter({
  separator: '|',
  sendHeaders: true,
});

writer.pipe(
  fs.createWriteStream('./db/generators/converters/totalReviews.csv', {
    flags: 'a',
  })
);

const generate10MillionTotalReviews = (writer, encoding, callback) => {
  let records = 10000000;
  let id = 0;

  const write = async () => {
    let ok = true;
    do {
      console.log(`records left: ${records}`);
      records -= 1;
      id += 1;
      let data = await generateCourses(id);
      data = data.allCourseTotalReviews[0];
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
};

generate10MillionTotalReviews(writer, 'utf8', () => write.end());
