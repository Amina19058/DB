--exersize #2
--1)
	SELECT * FROM country ORDER BY country_id ASC OFFSET 11 LIMIT 6;
--2)
	SELECT address, city FROM address LEFT JOIN city ON address.city_id = city.city_id 
		WHERE UPPER(city.city) LIKE 'A%';
--3)
	SELECT first_name, last_name, city FROM customer 
		LEFT JOIN (SELECT address_id, address, city FROM address 
				   LEFT JOIN city ON address.city_id = city.city_id) AS addresses_cities
		ON customer.address_id = addresses_cities.address_id;
--4)
	SELECT customer_id, first_name, email FROM customer 
	WHERE customer_id IN (SELECT customer_id FROM payment WHERE amount > '11');
--5)
	SELECT first_name FROM customer 
	GROUP BY first_name 
	HAVING COUNT(first_name) > 1;

--exersize #2
--1 view:
	DROP VIEW address_city;
	CREATE VIEW address_city AS
	SELECT address_id, address, city FROM address 
	LEFT JOIN city ON address.city_id = city.city_id;
	
--2 view: 
	DROP VIEW all_films_of_family_category;
	CREATE VIEW all_films_of_family_category AS
	SELECT title, description, rating FROM film 
	LEFT JOIN (SELECT film_category.category_id FROM film_category 
	LEFT JOIN category ON film_category.category_id = category.category_id 
	WHERE category.name = 'Family') AS only_family_films 
	ON film.film_id = only_family_films.category_id; 
	
--query with view:
	SELECT first_name, last_name, city FROM customer 
		LEFT JOIN address_city ON customer.address_id = address_city.address_id;

--trigger:
CREATE OR REPLACE FUNCTION public.last_payment_changes()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
	NEW.amount = OLD.amount*0.2;
	RETURN NEW;
END;
$$;

	--DROP TRIGGER discount;
	
	CREATE TRIGGER discount
	BEFORE UPDATE ON payment
	FOR EACH ROW EXECUTE PROCEDURE public.last_payment_changes();

/*CREATE TABLE total_payment (
	customer_id int,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    total_payment float
);
SELECT customer_id, first_name, last_name, email INTO total_payment 
FROM customer LEFT JOIN */

	