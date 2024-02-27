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
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_type post_type_enum NOT NULL,
    num_data FLOAT NOT NULL,
    ticker_symbol VARCHAR(9),
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comment TEXT NOT NULL,
    title VARCHAR NOT NULL
);

INSERT INTO posts (user_id, post_type, num_data, ticker_symbol, comment, title)
VALUES
  (1, '1 month summary', 100, 'AAPL', 'I made a 100% return on my investment in Apple this month!', 'Apple Investment'),
  (2, 'Recent trade', 200, 'TSLA', 'I just bought 200 shares of Tesla!', 'Tesla Investment'),
  (2, 'Share comment', 150, 'MSFT', 'I think Microsoft is a great company to invest in!', 'Microsoft Comment'),
  (2, '1 month summary', 250, 'GOOGL', 'I made a 250% return on my investment in Google this month!', 'Google Investment'),
  (3, 'Recent trade', 300, 'AMZN', 'I just bought 300 shares of Amazon!', 'Amazon Investment'),
  (3, 'Share comment', 400, 'FB', 'I think Facebook is a great company to invest in!', 'Facebook Comment');