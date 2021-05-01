const db = require('../db/index.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3007;
const cors = require('cors');
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('./public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.get('/:id/test', (req, res) => {
  db.findReviewAndUpdate(req.params.id)
    .then(data => {
      console.log(`data: ${data}`)
      res.sendStatus(200)
    })
    .catch((err) => {
      res.sendStatus(404)
      console.log(`err: ${err}`)
    })
})

app.get('/:id/updateAllNames', (req, res) => {
  db.updateAllNames(req.params.id)
  .then(data => {
    console.log(`data: ${data}`)
    res.sendStatus(200)
  })
  .catch((err) => {
    res.sendStatus(404)
    console.log(`err: ${err}`)
  })
})

app.get('/api/userReviews/:id', (req, res) => {
  db.getUserReview(req.params.id)
    .then((data) => {
      if (!data) {
        res.sendStatus(404);
      } else {
        res.send(data).status(200);
      }
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

app.get('/api/totalReviewScore/:id', (req, res) => {
  db.getTotalReviewScore(req.params.id)
    .then((data) => {
      if (!data) {
        res.sendStatus(404);
      } else {
        res.send(data).status(200);
      }
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});