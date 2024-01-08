DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_idid SERIAL PRIMARY KEY,
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
);

-- Insert sample data into "users" table
INSERT INTO users (first_name, last_name)
VALUES
  ('Ania', 'Misiorek'),
  ('Leroy', 'Shaigorodsky'),