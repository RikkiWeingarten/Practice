-- CREATE TABLE items(
--  id SERIAL PRIMARY KEY,
--  name VARCHAR(255) NOT NULL,
--  price Int Not Null
-- )

-- CREATE TABLE customers(
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(100) NOT NULL
-- )

-- INSERT INTO items(name, price)
-- Values ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80)

-- INSERT INTO customers (first_name, last_name)
-- Values ('Greg', 'Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson')

select * from items;
select * from items where price > 80;
select * from items where price <= 300;
select * from customers where last_name = 'Smith';
select * from customers where last_name = 'Jones';
select * from customers where last_name != 'Scott';







