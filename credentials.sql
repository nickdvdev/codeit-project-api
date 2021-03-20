CREATE TABLE credentials (
    id serial PRIMARY KEY,
    user_login VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(100) NOT NULL
);