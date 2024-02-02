DROP TABLE IF EXISTS user_short_term_goals;
DROP TABLE IF EXISTS user_long_term_goals;

CREATE TYPE short_term_enum AS ENUM ('Learn more about investing', 'Diversify portfolio', 'Save for a big event');
CREATE TYPE long_term_enum AS ENUM ('Gain followers', 'Save for retirement', 'Save for children’s education', 'Save for a down payment');

-- Create UserShortTermGoals table
CREATE TABLE user_short_term_goals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    short_term_goal short_term_enum
);

-- Create UserLongTermGoals table
CREATE TABLE user_long_term_goals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    long_term_goal long_term_enum
);

INSERT INTO user_long_term_goals (user_id, long_term_goal)
VALUES
  (1, 'Save for retirement'),
  (1, 'Gain followers');

INSERT INTO user_short_term_goals (user_id, short_term_goal)
VALUES
  (2, 'Learn more about investing'),
  (2, 'Diversify portfolio');