CREATE OR REPLACE FUNCTION  retrievecustomers(start_ int,end_ int)
RETURNS SETOF customer AS
$$
BEGIN
IF (start_ < 0 or end_ < 0) 
THEN RAISE EXCEPTION 'Expected positive value for id';
ELSIF (start_ > 600 or end_ > 600)
THEN RAISE EXCEPTION 'Expected value that is less than 600';
ELSIF (start_ > end_)
THEN RAISE EXCEPTION 'Start should be less than end';
END IF;
RETURN QUERY
SELECT *
FROM customer ORDER BY customer.address_id LIMIT (end_ - start_) OFFSET start_;
END; 
$$
LANGUAGE plpgsql;

select retrievecustomers(10, 40);
