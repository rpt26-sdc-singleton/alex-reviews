\c coursera;

\set content `cat ~/Users/galexy/Documents/learn-programming/Courses/Hack Reactor/hack-reactor-work/rptImmersive/rpt26-sdc-review-service/db/generators/seededData/reviews.json`

INSERT INTO coursera_schema.reviews
VALUES (:'content');