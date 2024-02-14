-- Create Following table
DROP TABLE IF EXISTS followings;

CREATE TABLE IF NOT EXISTS followings (
    followings_id SERIAL PRIMARY KEY,
    follower_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    following_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    follow_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_following_pair UNIQUE (follower_user_id, followed_user_id),
    CONSTRAINT no_self_follow CHECK (follower_user_id != followed_user_id)
);

CREATE INDEX IF NOT EXISTS idx_follower_user_id ON followings(follower_user_id);
CREATE INDEX IF NOT EXISTS idx_following_user_id ON followings(followed_user_id);

-- Insert sample data into "following" table
INSERT INTO followings (follower_user_id, followed_user_id)
VALUES
  (1, 2),
  (2, 1);