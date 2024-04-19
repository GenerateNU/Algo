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
-- Ania
('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 10.45, 2.09, 67.09, 7.09),
-- Leroy
('user_2cpFbBLPGkPbszijtQneek7ZJxg', -14.09, -8.9, 300.90, 10.88),
-- Cam
('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 25.99, 3.09, -78.23, -2.09),
-- Nathan
('user_2fFVsSf4viW9pjx6Sd5dxEgutJ1', 100.09, 9.15, 230.87, 24.88),
-- Adam
('user_2fFc7GSuJYpOJElO4iEchMUokCN', -9.09, -.09, 18.90, 2.98),
-- Jessica
('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 235.09, 15.90, 500.87, 9.3),
-- Jakob
('user_2fKllee1LFjb1jY3Zwe3dXFX38Z', -2.47, -2.91, 852.29, 34.38);