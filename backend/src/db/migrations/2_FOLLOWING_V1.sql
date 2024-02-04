-- Create Following table
DROP TABLE IF EXISTS following;

CREATE TABLE IF NOT EXISTS following (
    following_id SERIAL PRIMARY KEY,
    follower_user_id INT NOT NULL REFERENCES users(id),
    following_user_id INT NOT NULL REFERENCES users(id),
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