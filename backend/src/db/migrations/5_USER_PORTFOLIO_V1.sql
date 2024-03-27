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