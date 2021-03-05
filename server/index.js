const db = require('../db/index.js');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.seedReviews(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Database has been seeded!');
    }
  });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});