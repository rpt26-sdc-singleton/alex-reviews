// const db = require('../db/index.js');
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

app.post('/:id/newReview', (req, res) => {
  let { reviewer, starCount, reviewDate, reviewText } = req.body;

  let newReview = {
    reviewer,
    starCount,
    reviewDate,
    reviewText,
  };
  postgresDb
    .addNewReview(req.params.id, newReview)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => reject(err));
});

app.get('/:id/reviewLength', (req, res) => {
  postgresDb
    .getReviewArraysLength(req.params.id)
    .then((data) => res.send({ numberOfReviews: data }))
    .catch((err) => res.send(err));
});

app.get('/:id/lastReview', (req, res) => {
  postgresDb
    .getLastReview(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(err);
    });
});

app.patch('/:id/forceUpdateTotalStarData', (req, res) => {
  postgresDb.forceUpdateTotalStarData(req.params.id)
  .then(response => res.send(response))
  .catch(err => res.send(err))
})

app.delete('/:id/deleteLastReview', (req, res) => {
  postgresDb
    .deleteLastReview(req.params.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.send(err));
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

app.get(`/${process.env.LOADERIO}`, (req, res) => {
  res.sendFile('./loaderio.txt');
});

// app.delete('/api/dropReviews', (req, res) => {
//   db.dropReviewsCollection().then((response) => {
//     if (!response) {
//       res.sendStatus(404);
//     } else {
//       res.send(response).status(200);
//     }
//   });
// });

// app.delete('/api/dropTotalReviews', (req, res) => {
//   db.dropTotalReviewsCollection().then((response) => {
//     if (!response) {
//       res.sendStatus(404);
//     } else {
//       res.send(response).status(200);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
