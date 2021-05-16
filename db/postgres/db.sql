DROP DATABASE IF EXISTS coursera;

CREATE DATABASE coursera;

\c coursera

CREATE TABLE IF NOT EXISTS reviews (
  course_number int,
  reviews json
);

CREATE TABLE IF NOT EXISTS totalreviews (
  course_number int,
  review_count int,
  total_star_score int,
  five_star_percent text,
  four_star_percent text,
  three_star_percent text,
  two_star_percent text,
  one_star_percent text
);