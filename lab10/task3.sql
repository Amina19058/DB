--task 3

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

DROP TABLE IF EXISTS Ledger;

CREATE TABLE IF NOT EXISTS public.Ledger (
    id serial primary key,
	from_ int,
	to_ int,
	fee int,
	amount int,
	TransactionDateTime timestamp 
);

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
INSERT INTO Ledger (from_, to_, fee, amount, TransactionDateTime) 
VALUES (1, 3, 0, 500, current_timestamp); 
	
UPDATE account
	SET credit = credit - 730
	WHERE id = 2;
UPDATE account
	SET credit = credit + 700
	WHERE id = 1;
UPDATE account
	SET credit = credit + 30
	WHERE id = 4;
INSERT INTO Ledger (from_, to_, fee, amount, TransactionDateTime) 
VALUES (2, 1, 30, 700, current_timestamp); 
	
UPDATE account
	SET credit = credit - 130
	WHERE id = 2;
UPDATE account
	SET credit = credit + 100
	WHERE id = 3;
UPDATE account
	SET credit = credit + 30
	WHERE id = 4;
INSERT INTO Ledger (from_, to_, fee, amount, TransactionDateTime) 
VALUES (2, 3, 30, 100, current_timestamp); 
	
SELECT * from Ledger;
rollback;

