-- Comments in SQL Start with dash-dash --

-- Find the app with an ID of 1880.
SELECT * FROM analytics WHERE id = 1880;

-- Find the ID and app name for all apps that were last updated on August 01, 2018.
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- Count the number of apps in each category, e.g. “Family | 1972”.
SELECT category, COUNT(*) FROM analytics GROUP BY category;

-- Find the top 5 most-reviewed apps and the number of reviews for each.
SELECT * FROM analytics ORDER BY reviews DESC LIMIT 5;
