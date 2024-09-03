-- Exercise 1
select * from items order by price;
select * from items where price >= 80 order by price desc;
select first_name, last_name from customers order by first_name limit 3;
select last_name from customers order by 1 desc;

-- Exercise 2
select * from customer;
select (first_name, last_name) as full_name from customer;
select distinct create_date from customer;
select * from customer order by first_name desc;
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;
select address, phone from address where district = 'Texas';
select * from film where film_id = 15 or film_id = 150;
select film_id, title, description, length, rental_rate from film where title = 'Titanic';
select film_id, title, description, length, rental_rate from film where title like 'Ti%';
select * from film order by replacement_cost limit 10;
select * from film where replacement_cost > 9.99 order by replacement_cost limit 10;
select customer.first_name, customer.last_name, payment.amount, payment.payment_date
from customer
right join payment 
on customer.customer_id = payment.customer_id order by customer.customer_id;

select * from film
left join 
    inventory
on
    film.film_id = inventory.film_id
where
    inventory.film_id is null;

select city.city, country.country from city
inner join country
on city.country_id = country.country_id;

select c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date from customer c
right join payment p 
	on c.customer_id = p.customer_id
order by p.staff_id;
