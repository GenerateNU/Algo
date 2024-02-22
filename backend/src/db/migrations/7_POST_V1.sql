DROP TABLE IF EXISTS post_type;
DROP TABLE IF EXISTS post;

--Create post type table
CREATE TYPE post_type_enum AS ENUM (
    '1 month summary',
    'Recent trade',
    'Share comment'
);

--Create post table
CREATE TABLE IF NOT EXISTS post (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_type post_type_enum NOT NULL,
    num_data FLOAT NOT NULL,
    ticker_symbol VARCHAR(9),
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comment TEXT NOT NULL,
    title VARCHAR NOT NULL
);