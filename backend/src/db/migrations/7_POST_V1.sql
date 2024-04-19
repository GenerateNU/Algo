DROP TABLE IF EXISTS post_type_enum;
DROP TABLE IF EXISTS posts;

--Create post type table
CREATE TYPE post_type_enum AS ENUM (
    '1 month summary',
    'Recent trade',
    'Share comment'
);

--Create post table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    post_type post_type_enum NOT NULL,
    num_data FLOAT NOT NULL,
    ticker_symbol VARCHAR(9),
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comment TEXT NOT NULL,
    title VARCHAR NOT NULL
);

INSERT INTO posts (user_id, post_type, num_data, ticker_symbol, comment, title)
VALUES
  ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'Share comment', 100, 'AAPL', 'Nvidia down 9.60% today. Has the bubble finally popped?', 'NVDA going down?'),
  ('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 'Recent trade', 50, 'MSFT', 'I just bought 200 shares of Tesla!', 'Microsoft Projected Earnings'),
  ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 'Share comment', 150, 'MSFT', 'Microsoft has high expected earnings this quarter', 'Microsoft up this week'),
  ('user_2fFVsSf4viW9pjx6Sd5dxEgutJ1', 'Share comment', 250, 'TSLA', 'TSLA 130 seems like a safe bet', 'Tesla Calls'),
  ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'Recent trade', 250, 'AMZN', 'I just bought 300 shares of Amazon!', 'Amazon Investment'),
  ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'Share comment', 400, 'FB', 'Netflix just blew past earnings report', 'Netflix UPPPP 🚀'),
  ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'Recent trade', 75, 'NFLX', 'Netflix just blew past earnings report', 'Netflix Investment');