--task 2
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

ALTER TABLE IF EXISTS ONLY account
ADD COLUMN IF NOT EXISTS BankName varchar(255);

INSERT INTO account (name, credit) 
VALUES ('Fee', 0);

update account
	set BankName ='SpearBank'
	WHERE id = 1;

update account
	set BankName ='Tinkoff'
	WHERE id = 2;

update account
	set BankName ='SpearBank'
	WHERE id = 3;
	

start transaction;
UPDATE account
	SET credit = credit - 500
	WHERE id = 1;
UPDATE account
	SET credit = credit + 500
	WHERE id = 3;
	
UPDATE account
	SET credit = credit - 730
	WHERE id = 2;
UPDATE account
	SET credit = credit + 700
	WHERE id = 1;
UPDATE account
	SET credit = credit + 30
	WHERE id = 4;
	
UPDATE account
	SET credit = credit - 130
	WHERE id = 2;
UPDATE account
	SET credit = credit + 100
	WHERE id = 3;
UPDATE account
	SET credit = credit + 30
	WHERE id = 4;
	
SELECT credit from account;
rollback;

