-- First task
	SELECT first_name, last_name, title FROM customer CROSS JOIN film INNER JOIN film_category 
	ON film.film_id =  film_category.film_id INNER JOIN category 
	ON film_category.category_id = category.category_id
	WHERE  (category.name='Horror' or category.name='Sci-Fi')
	AND (film.rating='R' or film.rating='PG-13')
	AND (customer_id, film.film_id) not in
	(SELECT customer_id, film.film_id FROM rental INNER JOIN inventory 
	ON rental.inventory_id = inventory.inventory_id INNER JOIN film 
	ON inventory.film_id = film.film_id);

-- Firstly, I do cartesian product customer with all films that I need. Then I check if they were rented by using "not in" costruction from the query where I've merged all films and customers who rented them

-- Second task

SELECT store_id, SUM (amount)
FROM staff INNER JOIN payment ON staff.staff_id = payment.staff_id
WHERE payment_id in (SELECT payment_id
FROM payment
WHERE
    date_trunc('month', payment_date) IN 
	(SELECT date_trunc('month', max(payment_date)) FROM payment)) GROUP BY staff.staff_id LIMIT 1;

-- Here I've counted the total amount of payments in every store during last mounth and then choosed the greatest
