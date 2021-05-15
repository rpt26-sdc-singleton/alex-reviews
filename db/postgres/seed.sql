-- COPY coursera.reviews (courseNumber, reviews)
-- FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/converters/reviewsConverted.csv'
-- DELIMITER '|'
-- CSV HEADER;

COPY coursera.totalreviews(courseNumber, reviewCount, totalStarScore, fiveStarPercent, fourStarPercent, threeStarPercent, twoStarPercent, oneStarPercent)
FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/converters/totalReviewsConverted.csv'
DELIMITER '|'
CSV HEADER;