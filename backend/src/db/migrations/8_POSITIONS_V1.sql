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