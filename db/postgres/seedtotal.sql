COPY totalreviews(course_number, review_count, total_star_score, five_star_percent, four_star_percent, three_star_percent, two_star_percent, one_star_percent)
FROM '/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/converters/totalReviewsConverted.csv'
DELIMITER '|'
CSV HEADER;