COPY coursera.reviews_per_course
FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/converters/reviewsTestConverted.csv'
DELIMITER '|'
CSV HEADER QUOTE '"';