\c coursera

-- COPY coursera.reviews_per_course
-- FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/generatedData/reviews.csv'
-- DELIMITER '|'
-- CSV HEADER QUOTE '"';

-- COPY coursera.totalreviews
-- FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/generatedData/totalReviews.csv'
-- DELIMITER '|'
-- CSV HEADER QUOTE '"';

COPY coursera.coursera_reviews
FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/generatedData/merged10Million.csv'
DELIMITER '|'
CSV HEADER QUOTE '"';