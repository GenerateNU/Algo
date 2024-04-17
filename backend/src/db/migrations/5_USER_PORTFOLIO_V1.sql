DROP TABLE IF EXISTS user_portfolios;

-- Create UserPortfolio table (Columns to define)
CREATE TABLE user_portfolios
(
    id             SERIAL PRIMARY KEY,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id        VARCHAR(255) REFERENCES users (id),
    day_gain       NUMERIC(12, 2),
    day_gain_pct   NUMERIC(12, 2),
    total_gain     NUMERIC(12, 2),
    total_gain_pct NUMERIC(12, 2)
);


INSERT INTO user_portfolios (user_id, day_gain, day_gain_pct, total_gain, total_gain_pct)
VALUES
('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 130, 14, 680, 93),
('user_2cpFbBLPGkPbszijtQneek7ZJxg', -14, -8, 680, 93),
('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 400, 3, 680, 93),
('user_2cwGfu9zcjsbxq5Lp8gy2rkVNlc', 200, 9, 680, 93);