const faker = require('faker');

// HELPERS //
const generateStarCount = () => {
  return faker.random.number({
    min: 1,
    max: 5,
  });
};

const generateReviewer = () => {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
};

const generateReviewDate = () => {
  return faker.date.past(5).toISOString().slice(0, 10);
};

const generateReviewText = () => {
  return faker.lorem.paragraph(1);
};


// MAIN GENERATOR //

const generateReviews = (numberOfReviewsToGenerate) => {
  const fakeReviews = [];

  for (let i = 0; i < numberOfReviewsToGenerate; i++) {
    let fakeReview = {
      //generate starcount
      starCount: generateStarCount(),
      //generate reviewer
      reviewer: generateReviewer(),
      //generate review date
      reviewDate: generateReviewDate(),
      //generate review text
      reviewText: generateReviewText(),
      _id: i + 1,
    };
    fakeReviews.push(fakeReview);
  }

  return fakeReviews;
};

module.exports = {
  generateReviews
};

