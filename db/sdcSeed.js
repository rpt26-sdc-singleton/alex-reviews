// MODELS //
const { ReviewsModel, TotalReviewsModel } = require('./models.js');
const { generateCourses } = require('./generators/coursesGenerator.js');
const mongoose = require('mongoose');
require('dotenv').config();

const seed = async () => {
  mongoose.connect(`${process.env.DB_LOCAL_DEV}/reviews`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', (err) => console.log(err));
  db.once('open', () => console.log('successfully connected to db'));

  const newCoursesToGenerate = 10;
  const generatedCourses = await generateCourses(newCoursesToGenerate);

  // console.log('courses: ', generatedCourses);

  await ReviewsModel.insertMany(generatedCourses.allCourseReviews)
    .then(() => console.log('finished inserting course reviews'))
    .catch((err) => console.log('err: ', err));

  await TotalReviewsModel.insertMany(generatedCourses.allCourseTotalReviews)
    .then(() => console.log('finished inserting course total reviews'))
    .catch((err) => console.log('err: ', err));

  db.close();
};

seed();
