--task 1
DROP TABLE IF EXISTS account;

CREATE TABLE IF NOT EXISTS public.account (
    id serial,
    name varchar(255),
    credit int
);

INSERT INTO account (name, credit)
VALUES ('Alice', 1000);
INSERT INTO account (name, credit) 
VALUES ('Bob', 1000); 
INSERT INTO account (name, credit) 
VALUES ('Khris', 1000);

start transaction;
UPDATE account
	SET credit = credit - 500
	WHERE id = 1;
UPDATE account
	SET credit = credit + 500
	WHERE id = 3;
	
UPDATE account
	SET credit = credit - 700
	WHERE id = 2;
UPDATE account
	SET credit = credit + 700
	WHERE id = 1;
	
UPDATE account
	SET credit = credit - 100
	WHERE id = 2;
UPDATE account
	SET credit = credit + 100
	WHERE id = 3;
	
SELECT credit from account;
rollback;

