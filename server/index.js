const db = require('../db/index.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3007;
const cors = require('cors');
const path = require('path');
const postgresDb = require('../db/postgres/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('./public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.get('/:id/newReview', (req, res) => {
  postgresDb
    .findReviewAndUpdate(req.params.id)
    .then((data) => {
      // console.log('data: ', data)
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(`err: ${err}`);
    });
});

app.post('/:id/newReview', (req, res) => {
  console.log('made it this far')
  let { reviewer, starCount, reviewDate, reviewText } = req.body;

  let newReview = {
    reviewer,
    starCount,
    reviewDate,
    reviewText,
  };

  console.log('newReview: ', newReview)
  postgresDb.addNewReview(req.params.id, newReview);
});

app.get('/:id/reviewLength', (req, res) => {
  postgresDb
    .getReviewArraysLength(req.params.id)
    .then((data) => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.patch('/:id/makeAllFiveStars', (req, res) => {
  db.makeAllFiveStars(req.params.id)
    .then((data) => {
      console.log(`data: ${data}`);
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(`err: ${err}`);
    });
});

app.get('/:id/deleteAllRecords', (req, res) => {
  db.deleteAllRecords(req.params.id)
    .then((data) => {
      console.log(`data: ${data}`);
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(`err: ${err}`);
    });
});

// ORIGINAL //

app.get('/api/userReviews/:id', (req, res) => {
  postgresDb
    .getUserReview(req.params.id)
    .then((data) => {
      if (!data) {
        res.sendStatus(404);
      } else {
        res.send(data[0]).status(200);
      }
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

app.get('/api/totalReviewScore/:id', (req, res) => {
  postgresDb
    .getTotalReviewScore(req.params.id)
    .then((data) => {
      if (!data) {
        res.sendStatus(404);
      } else {
        res.send(data[0]).status(200);
      }
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

app.delete('/api/dropReviews', (req, res) => {
  db.dropReviewsCollection().then((response) => {
    if (!response) {
      res.sendStatus(404);
    } else {
      res.send(response).status(200);
    }
  });
});

app.delete('/api/dropTotalReviews', (req, res) => {
  db.dropTotalReviewsCollection().then((response) => {
    if (!response) {
      res.sendStatus(404);
    } else {
      res.send(response).status(200);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
