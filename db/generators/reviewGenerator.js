const faker = require('faker');

const generateReviews = (numberOfReviewsToGenerate) => {
  //generate starcount
  let starCount = generateStarCount();
  //generate reviewer
  //generate review date
  //generate review text
}

// HELPERS //
const generateStarCount = () => {
  return faker.random.number({
    min: 1,
    max: 5,
  });
};