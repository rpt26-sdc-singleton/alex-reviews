DROP SCHEMA IF EXISTS coursera_schema CASCADE;

CREATE SCHEMA coursera_schema;

CREATE TABLE IF NOT EXISTS coursera_schema.reviews (
  course_number int,
  reviews json
);

CREATE TABLE IF NOT EXISTS coursera_schema.totalreviews (
  course_number int,
  review_count int,
  total_star_score int,
  five_star_percent text,
  four_star_percent text,
  three_star_percent text,
  two_star_percent text,
  one_star_percent text
);

