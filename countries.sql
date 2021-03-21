CREATE TABLE countries (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(100) UNIQUE NOT NULL
) AUTO_INCREMENT = 1;

INSERT INTO countries (country_name) VALUES ('Ukraine');
INSERT INTO countries (country_name) VALUES ('USA');