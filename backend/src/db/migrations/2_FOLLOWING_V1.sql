-- Create Following table
DROP TABLE IF EXISTS followings;

CREATE TABLE followings (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    follower_user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    following_user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT unique_following_pair UNIQUE (follower_user_id, following_user_id),
    CONSTRAINT no_self_follow CHECK (follower_user_id != following_user_id)
);

CREATE INDEX IF NOT EXISTS idx_follower_user_id ON followings(follower_user_id);
CREATE INDEX IF NOT EXISTS idx_following_user_id ON followings(following_user_id);

-- Insert sample data into "following" table
INSERT INTO followings (follower_user_id, following_user_id)
VALUES
-- Ania following
  ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'user_2cpFbBLPGkPbszijtQneek7ZJxg'),
  ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk'),
  ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'user_2fFVsSf4viW9pjx6Sd5dxEgutJ1'),
  ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'user_2fFgdKCKoif7NYYDABfk4wLDgrm'),
-- Leroy following
  ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 'user_2chL8dX6HdbBAuvu3DDM9f9NzKK'),
  ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 'user_2fFgdKCKoif7NYYDABfk4wLDgrm'),
  ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 'user_2fFVsSf4viW9pjx6Sd5dxEgutJ1'),
-- Cam following
  ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'user_2chL8dX6HdbBAuvu3DDM9f9NzKK'),
  ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'user_2cpFbBLPGkPbszijtQneek7ZJxg'),
  ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'user_2fFgdKCKoif7NYYDABfk4wLDgrm'),
  ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'user_2fFc7GSuJYpOJElO4iEchMUokCN'),
-- Adam following
  ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'user_2chL8dX6HdbBAuvu3DDM9f9NzKK'),
  ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'user_2cpFbBLPGkPbszijtQneek7ZJxg'),
  ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'user_2fFVsSf4viW9pjx6Sd5dxEgutJ1'),
  ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'user_2fFgdKCKoif7NYYDABfk4wLDgrm'),
-- Jessica following
  ('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 'user_2chL8dX6HdbBAuvu3DDM9f9NzKK'),
  ('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 'user_2cpFbBLPGkPbszijtQneek7ZJxg'),
  ('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 'user_2fFVsSf4viW9pjx6Sd5dxEgutJ1'),
  ('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 'user_2fFc7GSuJYpOJElO4iEchMUokCN'),
-- Nathan following
  ('user_2fFVsSf4viW9pjx6Sd5dxEgutJ1', 'user_2chL8dX6HdbBAuvu3DDM9f9NzKK'),
  ('user_2fFVsSf4viW9pjx6Sd5dxEgutJ1', 'user_2cpFbBLPGkPbszijtQneek7ZJxg');
