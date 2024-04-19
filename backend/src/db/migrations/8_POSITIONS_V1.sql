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
-- Ania Portfolio
    (1, 123456, 'AAPL', 10, 150.25, 20.50, 2.5, 100.75, 5.25, 'LONG'),
    (1, 654321, 'GME', 5, 250.75, 10.25, 1.75, -50.50, -2.75, 'SHORT'),
    (1, 987654, 'MSFT', 8, 300.50, 15.75, 2.25, 80.25, 4.5, 'LONG'),
    (1, 313141, 'JBL', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (1, 14444, 'WFC', 10, 12.44, 1.47, 13.40, 63.52, 18.24, 'LONG'),
    (1, 27005131, 'NVDA', 5, 155.45, 1.66, 1.06, 109.67, 41.37, 'LONG'),
    (1, 3244, 'T', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
-- Leroy Portfolio
    (2, 987654, 'MSFT', 8, 300.50, 15.75, 2.25, -80.25, -4.5, 'LONG'),
    (2, 313141, 'SMCI', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (2, 14444, 'ARM', 10, 12.44, 1.47, 13.40, 63.52, 18.24, 'LONG'),
    (2, 27005131, 'AMD', 5, 155.45, 1.66, 1.06, 109.67, 41.37, 'LONG'),
    (2, 3244, 'SOFI', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
    (2, 3244, 'QQQ', 5, 168.00, 1.38, 0.81, 584.60, 228.90, 'LONG'),
-- Cam Portfolio
    (3, 246813, 'AMZN', 12, 200.25, 25.50, 3.25, 150.75, 7.75, 'SHORT'),
    (3, 313141, 'ZTS', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (3, 14444, 'INTC', 10, 12.44, 1.47, 13.40, 63.52, 18.24, 'LONG'),
    (3, 27005131, 'NVDA', 5, 155.45, 1.66, -1.06, 109.67, 41.37, 'LONG'),
    (3, 3244, 'GOOG', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
    (3, 3244, 'AAPL', 5, 168.00, 1.38, -0.81, 584.60, 228.90, 'LONG'),
-- Nathan Portfolio
    (4, 313141, 'DNA', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (4, 14444, 'CRWD', 10, 12.44, 1.47, 13.40, 63.52, 18.24, 'LONG'),
    (4, 27005131, 'NVDA', 5, 155.45, 1.66, -1.06, 109.67, 41.37, 'LONG'),
    (4, 3244, 'TSLA', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
    (4, 3244, 'AAPL', 5, 168.00, -1.38, -0.81, 584.60, 228.90, 'LONG'),
-- Adam Portfolio
    (5, 313141, 'SMCI', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (5, 14444, 'ELF', 10, 12.44, 1.47, 13.40, 63.52, 18.24, 'LONG'),
    (5, 27005131, 'NVDA', 5, 155.45, 1.66, -1.06, 109.67, 41.37, 'LONG'),
    (5, 3244, 'F', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
    (5, 3244, 'AAPL', 5, 168.00, -1.38, -0.81, 584.60, 228.90, 'LONG'),
-- Jessica Portfolio
    (6, 313141, 'PFE', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (6, 14444, 'PARA', 10, 12.44, 1.47, 13.40, 63.52, 18.24, 'LONG'),
    (6, 27005131, 'NVDA', 5, 155.45, 1.66, -1.06, 109.67, 41.37, 'LONG'),
    (6, 3244, 'AXP', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
    (6, 3244, 'AAPL', 5, 168.00, -1.38, -0.81, 584.60, 228.90, 'LONG'),
-- Jakob Portfolio
    (7, 313141, 'NVDA', 3, 840.35, 33.80, 3.87, 900.12, 54.62, 'LONG'),
    (7, 14444, 'MSFT', 1, 411.84, -0.13, -0.44, 63.52, 18.24, 'LONG'),
    (7, 27005131, 'TSLA', 5, 155.45, 1.66, 1.06, -109.67, -41.37, 'LONG'),
    (7, 3244, 'GOOG', 2, 156.88, 0.88, 0.56, 34.64, 12.31, 'LONG'),
    (7, 3244, 'AAPL', 5, 168.00, -1.38, -0.81, 584.60, 228.90, 'LONG');




