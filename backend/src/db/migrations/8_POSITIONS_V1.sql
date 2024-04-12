DROP TABLE IF EXISTS positions;

--Create post type table
CREATE TYPE trade_type_enum AS ENUM (
    'LONG',
    'SHORT'
    );

-- Create Positions table (Columns to define)
CREATE TABLE positions
(
    id                SERIAL PRIMARY KEY,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_portfolio_id INTEGER REFERENCES user_portfolios (id),
    position_id BIGINT NOT NULL,
    ticker            VARCHAR         NOT NULL,
    quantity          INTEGER         NOT NULL,
    cost              NUMERIC(12, 2)  NOT NULL,
    day_gain          NUMERIC(12, 2)  NOT NULL,
    day_gain_pct      NUMERIC(12, 2)  NOT NULL,
    total_gain        NUMERIC(12, 2)  NOT NULL,
    total_gain_pct    NUMERIC(12, 2)  NOT NULL,
    type              trade_type_enum NOT NULL
);

-- Insert dummy data into positions table
INSERT INTO positions (user_portfolio_id, position_id, ticker, quantity, cost, day_gain, day_gain_pct, total_gain, total_gain_pct, type)
VALUES
    (1, 123456, 'AAPL', 10, 150.25, 20.50, 2.5, 100.75, 5.25, 'LONG'),
    (1, 654321, 'GOOGL', 5, 250.75, 10.25, 1.75, 50.50, 2.75, 'SHORT'),
    (2, 987654, 'MSFT', 8, 300.50, 15.75, 2.25, 80.25, 4.5, 'LONG'),
    (3, 246813, 'AMZN', 12, 200.25, 25.50, 3.25, 150.75, 7.75, 'SHORT');