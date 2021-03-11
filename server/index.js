// const db = require('../db/index.js');
const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors());
app.use(express.static('./public'));

app.get('/api/reviews:id', async (req, res) => {
  const data = db.get(req.params.id);
  // console.log(res);
  res.send(data).status(200);
});

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});