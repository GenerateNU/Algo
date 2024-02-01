-- init.sql
DROP TABLE IF EXISTS users;

CREATE TYPE risk_tolerance_enum AS ENUM ('low', 'medium', 'high');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    pass_word VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    risk_tolerance risk_tolerance_enum,
    years_of_experience INTEGER
);

INSERT INTO users (first_name, last_name, pass_word, username, email, risk_tolerance, years_of_experience)
VALUES
  ('Ania', 'Misiorek', 'password', 'email1@gmail.com', 'Ania_misi', 'medium', 4),
  ('Leroy', 'Shaigorodsky', 'password', 'email2@gmail.com', 'Leroy_shai', 'medium', 1);