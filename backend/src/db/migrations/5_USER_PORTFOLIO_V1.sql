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
    ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 100.50, 2.5, 500.25, 10.75), 
    ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 50.75, 1.25, 250.50, 5.5), 
    ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 75.25, 1.75, 375.75, 7.25),
    ('user_2cwGfu9zcjsbxq5Lp8gy2rkVNlc', 0, 0, 0, 0);