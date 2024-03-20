DROP TABLE IF EXISTS positions;

--Create post type table
CREATE TYPE trade_type_enum AS ENUM (
    'LONG',
    'SHORT'
    );

-- Create UserPortfolio table (Columns to define)
CREATE TABLE positions
(
    id                SERIAL PRIMARY KEY,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_portfolio_id INTEGER REFERENCES user_portfolios (id),
    position_id       INTEGER         NOT NULL,
    ticker            VARCHAR         NOT NULL,
    quantity          INTEGER         NOT NULL,
    cost              NUMERIC(12, 2)  NOT NULL,
    day_gain          NUMERIC(12, 2)  NOT NULL,
    day_gain_pct      NUMERIC(12, 2)  NOT NULL,
    total_gain        NUMERIC(12, 2)  NOT NULL,
    total_gain_pct    NUMERIC(12, 2)  NOT NULL,
    type              trade_type_enum NOT NULL
);

INSERT INTO positions (user_portfolio_id, position_id, ticker, quantity, cost, day_gain, day_gain_pct, total_gain,
                       total_gain_pct, type)
VALUES (1, 1, 'APPL', 10, 250.23, 2.13, 0.4, 2.13, 0.4, 'LONG'),
       (1, 2, 'MSFT', 50, 200.42, 2.13, 0.4, 2.13, 0.4, 'LONG'),
       (1, 3, 'NVDA', -10, 300.99, 2.13, 0.4, 2.13, 0.4, 'SHORT');