DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS leaderboards;
DROP TABLE IF EXISTS scores;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    pass_word VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS leaderboards (
  leaderboard_id SERIAL PRIMARY KEY,
  leaderboard_name VARCHAR(255) NOT NULL,
  leaderboard_description TEXT
);

CREATE TABLE IF NOT EXISTS scores (
  score_id SERIAL PRIMARY KEY,
  score INT NOT NULL,
  score_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  leaderboard_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (leaderboard_id) REFERENCES leaderboards(leaderboard_id)
);

-- Insert sample data into "users" table
INSERT INTO users (first_name, last_name, pass_word, email)
VALUES
    ('Ania', 'Misiorek', 'password1', 'email1@gmail.com'),
    ('Leroy', 'Shaigorodsky', 'password2', 'email2@gmail.com'),
    ('John', 'Doe', 'P4ssw0rd', 'email3@gmail.com'),
    ('Jane', 'Smith', 'r8ndpass', 'email4@gmail.com'),
    ('Michael', 'Johnson', 'passw0rd', 'email5@gmail.com'),
    ('Emily', 'Brown', 'S3CuRr1ty', 'email6@gmail.com'),
    ('David', 'Davis', 'p@ssw0rD', 'email7@gmail.com'),
    ('Sarah', 'Wilson', 'R4nd0mp4', 'email8@gmail.com'),
    ('Daniel', 'Taylor', 'p@3sw0rd', 'email9@gmail.com'),
    ('Olivia', 'Anderson', 'secur1ty', 'email10@gmail.com'),
    ('Matthew', 'Thomas', 'r4nD0mp4', 'email11@gmail.com'),
    ('Sophia', 'Martinez', 'p4s3w0rd', 'email12@gmail.com'),
    ('James', 'Hernandez', 's3cuUR1ty', 'email13@gmail.com'),
    ('Emma', 'Lopez', 'r4nd0mP4', 'email14@gmail.com'),
    ('Benjamin', 'Gonzalez', 'P@ssw0rd', 'email15@gmail.com'),
    ('Ava', 'Perez', 'Ss3cur1ty', 'email16@gmail.com'),
    ('William', 'Smith', 'r4nd0mp', 'email17@gmail.com'),
    ('Mia', 'Johnson', 'p4ssw0rd', 'email18@gmail.com'),
    ('Alexander', 'Brown', 's3cur1tYY', 'email19@gmail.com'),
    ('Sofia', 'Davis', 'r4nd0m', 'email20@gmail.com'),
    ('Adam', 'Ma', 'password', 'email21@gmail.com'),
    ('Madam', 'Ahh', 'password', 'email22@gmail.com'),

-- Insert sample data into "leaderboards" table
INSERT INTO leaderboards (leaderboard_name, leaderboard_description)
VALUES
  ('Penny Stocks', 'Leaderboard for traders with the most successful penny stock trades.'),
  ('Blue Chip Stocks', 'Leaderboard for traders with the most successful blue chip stock trades.');

-- Insert sample data into "scores" table
INSERT INTO scores (score, user_id, leaderboard_id)
VALUES
  (100, 1, 1),
  (200, 2, 1),
  (150, 3, 1),
  (250, 4, 1),
  (300, 5, 1),
  (400, 6, 1),
  (20, 1, 2),
  (10, 2, 2),
  (30, 3, 2),
  (40, 4, 2),
  (50, 5, 2),
  (60, 6, 2);
