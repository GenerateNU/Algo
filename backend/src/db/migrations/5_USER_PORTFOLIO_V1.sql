DROP TABLE IF EXISTS user_portfolio;

-- Create UserPortfolio table (Columns to define)
CREATE TABLE user_portfolio (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO user_portfolio (user_id)
VALUES
  (1),
  (2);