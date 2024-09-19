SELECT * FROM LANGUAGE;

SELECT film.title, film.description, language.name FROM film
LEFT JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name FROM film
RIGHT JOIN language ON film.language_id = language.language_id;

CREATE TABLE new_film (
	id int NOT NULL,
	name varchar(255) NOT NULL
);

INSERT INTO new_film (name) 
VALUES
('Inception'),
('Parasite'),
('The Matrix');

CREATE TABLE customer_review(
	review_id int NOT NULL,
	name varchar(255) NOT NULL
);

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

