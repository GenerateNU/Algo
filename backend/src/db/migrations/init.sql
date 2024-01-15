DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    pass_word VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);

-- Insert sample data into "users" table
INSERT INTO users (first_name, last_name, pass_word, email)
VALUES
  ('Ania', 'Misiorek', 'password', 'email1@gmail.com'),
  ('Leroy', 'Shaigorodsky', 'password', 'email2@gmail.com');