DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS following;

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

CREATE TABLE IF NOT EXISTS following (
    following_id SERIAL PRIMARY KEY,
    follower_user_id INT NOT NULL REFERENCES users(user_id),
    following_user_id INT NOT NULL REFERENCES users(user_id),
    follow_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_following_pair UNIQUE (follower_user_id, following_user_id),
    CONSTRAINT no_self_follow CHECK (follower_user_id != following_user_id)
);

CREATE INDEX IF NOT EXISTS idx_follower_user_id ON following(follower_user_id);
CREATE INDEX IF NOT EXISTS idx_following_user_id ON following(following_user_id);

-- Insert sample data into "following" table
INSERT INTO following (follower_user_id, following_user_id)
VALUES
  (1, 2),
  (2, 1);
