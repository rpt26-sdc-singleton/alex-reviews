DROP DATABASE IF EXISTS coursera;

CREATE DATABASE coursera;

\c coursera

DROP SCHEMA IF EXISTS  coursera;

CREATE SCHEMA coursera;

DROP TABLE IF EXISTS coursera.reviews_per_course;

CREATE TABLE IF NOT EXISTS coursera.reviews_per_course (
  course_number text  NOT NULL,
  reviews jsonb NOT NULL
);

DROP TABLE IF EXISTS coursera.totalreviews;

CREATE TABLE IF NOT EXISTS coursera.totalreviews (
  course_number text NOT NULL,
  review_count int NOT NULL,
  total_star_score int NOT NULL,
  five_star_percent text NOT NULL,
  four_star_percent text NOT NULL,
  three_star_percent text NOT NULL,
  two_star_percent text NOT NULL,
  one_star_percent text NOT NULL
);