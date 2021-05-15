DROP DATABASE IF EXISTS coursera;

CREATE DATABASE coursera;

DROP SCHEMA IF EXISTS coursera CASCADE;

CREATE SCHEMA IF NOT EXISTS coursera;

CREATE TABLE IF NOT EXISTS coursera.reviews (
  courseNumber text,
  reviews text
);

CREATE TABLE IF NOT EXISTS coursera.totalreviews (
  courseNumber int,
  reviewCount int,
  totalStarScore int,
  fiveStarPercent text,
  fourStarPercent text,
  threeStarPercent text,
  twoStarPercent text,
  oneStarPercent text
);