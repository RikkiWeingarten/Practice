-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
--  id SERIAL PRIMARY KEY,
--  last_name VARCHAR(100) NOT NULL,
--  first_name VARCHAR(50) Not Null,
--  birth_date DATE NOT NULL
-- );


-- INSERT into students(first_name, last_name, birth_date)
-- values
-- ('Marc','Benichou','02/11/1998'),
-- ('Yoan','Cohen','03/12/2010'),
-- ('Lea','Benichou','27/07/1987'),
-- ('Amelia','Dux','07/04/1996'),
-- ('David','Grez','14/06/2003'),
-- ('Omer','Simpson','03/10/1980');

-- INSERT into students(first_name, last_name, birth_date)
-- values ('Rikki', 'Weingarten', '02/01/1998');

select * from students;
select first_name, last_name from students;
select first_name, last_name from students where id = 2;
select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc';
select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc';
select first_name, last_name from students where first_name like '%a%';
select first_name, last_name from students where first_name like 'a%';
select first_name, last_name from students where first_name like '%a';
select first_name, last_name from students where first_name like '%a_';
select first_name, last_name from students where id = 1 or id =3;
select * from students where birth_date >= '01/01/2000'

