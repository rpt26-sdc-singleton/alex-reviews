DROP DATABASE IF EXISTS coursera;
CREATE DATABASE coursera;

\c sdcReviews;

CREATE TABLE reviews (
  id integer PRIMARY KEY,
  courses json
);

CREATE TABLE totalReviews (
  id integer PRIMARY KEY,
  courses json
)