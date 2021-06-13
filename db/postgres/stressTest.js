import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '60s',
};

// GET STRESS TEST //
export const getStressTest = () => {
  let randomReview = Math.floor(Math.random() * 10000000) + 1;
  http.get(`http://localhost:3007/api/userReviews/${randomReview}`);
};

// POST STRESS TEST //
// export const postStressTest = () => {
//   let stressReview = {
//     reviewer: 'Test Nguyen',
//     starCount: Math.floor(Math.random() * 5) + 1,
//     reviewDate: '2021-02-19',
//     reviewText: 'testing with creating a new review',
//   };
//   // let stressReview = generateReviews(1);
//   http.post('http://localhost:3007/2/newReview', JSON.stringify(stressReview), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// };

export default () => {
  getStressTest();
  // postStressTest();
  sleep(1);
};

/* RESULTS
> postgres:stress-test
> k6 run db/postgres/stressTest.js


          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: db/postgres/stressTest.js
     output: -

  scenarios: (100.00%) 1 scenario, 1000 max VUs, 1m30s max duration (incl. graceful stop):
           * default: 1000 looping VUs for 1m0s (gracefulStop: 30s)

WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7800788\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8248198\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/985451\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5259915\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4532768\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/704532\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5807997\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9920222\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5994083\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5496709\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6138112\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1858109\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3870852\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7162452\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2632383\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5416603\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7198406\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4895260\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4407664\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/817329\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3229319\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8694022\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1890918\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2308885\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/902720\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8644422\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2847765\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3194142\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8971552\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9628207\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6660014\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9963419\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4035571\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6356027\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5570417\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2526267\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/855327\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8164511\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4120136\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3601329\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4812171\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7373843\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8180135\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4498381\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/251219\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4879787\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6116901\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6832695\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1714084\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/305921\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6284733\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6186161\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8709177\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7027509\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1970318\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4922858\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5277298\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6874482\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2080905\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8985825\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2274473\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3372772\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8521978\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7347190\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3663588\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7412180\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4260597\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1016108\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/678518\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6550776\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4718561\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/158775\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9754823\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8238268\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6999047\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8692942\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3922702\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7312711\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8228416\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6143624\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1878627\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2144862\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2286624\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3033306\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3463388\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4990223\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2030271\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9505914\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8562877\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3072908\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6715419\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7478853\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1433967\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4137020\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8379048\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1847849\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3310841\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9590596\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/639356\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5374998\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/383382\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7551244\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4858271\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5152181\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8613205\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1388241\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4875533\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5724564\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9596412\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8018354\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6484654\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9482617\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1468733\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6372103\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3553873\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5670144\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2206742\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6241448\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1720374\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/170231\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8108823\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9674701\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/63891\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9070617\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1958741\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3626752\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6551914\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6040645\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6261732\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2279106\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8444877\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4337926\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6057174\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3111116\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1034633\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5423527\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2020602\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/788721\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4996572\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4644443\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8284086\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/197208\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4442777\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8473022\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7506676\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5000190\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1993085\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5143624\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5712748\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3958399\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9680119\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6293791\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4161676\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/336794\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7827349\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/985545\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6045368\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9562586\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4404028\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2840957\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2194951\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8872926\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2365679\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7805814\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/826423\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3113893\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8830808\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3590310\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3544169\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5382991\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9748649\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9888813\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8879308\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1540540\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3266980\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5419823\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3308922\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7080413\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7418173\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3323023\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7626368\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1639288\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1510992\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8560347\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5868697\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/881012\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4522812\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4000763\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7084311\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3514620\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2061137\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5001886\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3634542\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9658030\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3773730\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9787491\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6922904\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3706126\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4381443\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4089275\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/297637\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1077423\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8162433\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7367206\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/883219\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2918720\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9805739\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2123573\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2893220\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3551705\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2656428\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7371176\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1017450\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5991079\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7773418\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9573866\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1954085\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/682837\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9533587\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/323553\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6273172\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6561358\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1272279\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/8992195\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7667992\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/1627311\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9854982\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2321332\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/6528564\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4520109\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5552962\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9667054\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0000] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/7566993\": dial tcp 127.0.0.1:3007: connect: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3922786\": read tcp 127.0.0.1:63508->127.0.0.1:3007: read: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/9151532\": read tcp 127.0.0.1:63509->127.0.0.1:3007: read: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3395439\": read tcp 127.0.0.1:63530->127.0.0.1:3007: read: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/2342419\": read tcp 127.0.0.1:63555->127.0.0.1:3007: read: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/5425532\": read tcp 127.0.0.1:63550->127.0.0.1:3007: read: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/4778068\": read tcp 127.0.0.1:63540->127.0.0.1:3007: read: connection reset by peer"
WARN[0001] Request Failed                                error="Get \"http://localhost:3007/api/userReviews/3606710\": read tcp 127.0.0.1:63551->127.0.0.1:3007: read: connection reset by peer"

running (1m01.0s), 0000/1000 VUs, 59771 complete and 0 interrupted iterations
default ✓ [======================================] 1000 VUs  1m0s

     data_received..................: 180 MB 2.9 MB/s
     data_sent......................: 6.1 MB 100 kB/s
     http_req_blocked...............: avg=580.56µs min=0s    med=1µs    max=161.12ms p(90)=3µs     p(95)=5µs
     http_req_connecting............: avg=442.07µs min=0s    med=0s     max=109.35ms p(90)=0s      p(95)=0s
     http_req_duration..............: avg=13.56ms  min=0s    med=6.27ms max=251.56ms p(90)=25.79ms p(95)=39.47ms
       { expected_response:true }...: avg=13.62ms  min=387µs med=6.31ms max=251.56ms p(90)=25.85ms p(95)=39.61ms
     http_req_failed................: 0.40%  ✓ 240    ✗ 59531
     http_req_receiving.............: avg=17.61µs  min=0s    med=12µs   max=4.68ms   p(90)=25µs    p(95)=36µs
     http_req_sending...............: avg=38.61µs  min=0s    med=4µs    max=10.02ms  p(90)=12µs    p(95)=21µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=13.51ms  min=0s    med=6.24ms max=251.42ms p(90)=25.77ms p(95)=39.39ms
     http_reqs......................: 59771  980.087809/s
     iteration_duration.............: avg=1.01s    min=1s    med=1s     max=1.32s    p(90)=1.02s   p(95)=1.04s
     iterations.....................: 59771  980.087809/s
     vus............................: 1000   min=1000 max=1000
     vus_max........................: 1000   min=1000 max=1000

*/