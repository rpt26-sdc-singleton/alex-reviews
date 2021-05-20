COPY coursera.totalreviews
FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/converters/totalReviewsConverted.csv'
DELIMITER '|'
CSV HEADER;

-- \set content `/Users/galexy/Desktop/totalreviews.json`

-- CREATE temp TABLE t (course_number int, reviews jsonb);
-- INSERT INTO t
-- VALUES(:'content');