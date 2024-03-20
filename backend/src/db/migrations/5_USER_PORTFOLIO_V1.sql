DROP TABLE IF EXISTS user_portfolios;

-- Create UserPortfolio table (Columns to define)
CREATE TABLE user_portfolios
(
    id SERIAL PRIMARY KEY,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES users (id)
);

INSERT INTO user_portfolios (user_id)
VALUES (1)