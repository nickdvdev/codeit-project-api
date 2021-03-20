CREATE TABLE countries (
    id serial PRIMARY KEY,
    country_name VARCHAR(100) UNIQUE NOT NULL
);