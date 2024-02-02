DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    pass_word VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS oauth_tokens (
    oauth_token_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    request_token VARCHAR,
    request_secret VARCHAR,
    access_token VARCHAR,
    access_secret VARCHAR,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Insert sample data into "users" table
INSERT INTO users (first_name, last_name, pass_word, email)
VALUES
  ('Ania', 'Misiorek', 'password', 'email1@gmail.com'),
  ('Leroy', 'Shaigorodsky', 'password', 'email2@gmail.com');