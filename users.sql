CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email text UNIQUE NOT NULL,
    birth_date TIMESTAMP NOT NULL,
    country_id SMALLINT NOT NULL
);