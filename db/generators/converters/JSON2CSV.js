const fs = require('fs').promises;

const convertReviews = filePath => {

}

const convertTotalReviews = async filePath => {
  let jsonData = await fs.readFile(filePath);

  jsonData = JSON.parse(jsonData);

  const headers = Object.keys(jsonData[0]);

  console.log(headers)
}

convertTotalReviews('/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/totalreviews.json')