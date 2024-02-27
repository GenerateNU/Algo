DROP TABLE IF EXISTS short_term_goals;
DROP TABLE IF EXISTS long_term_goals;
DROP TABLE IF EXISTS user_short_term_goals;
DROP TABLE IF EXISTS user_long_term_goals;

-- Create ShortTermGoals table
CREATE TABLE short_term_goals (
    id SERIAL PRIMARY KEY,
    short_term_goal VARCHAR(255) NOT NULL
);

-- Create LongTermGoals table
CREATE TABLE long_term_goals (
    id SERIAL PRIMARY KEY,
    long_term_goal VARCHAR(255) NOT NULL
);

-- Create UserShortTermGoals table
CREATE TABLE user_short_term_goals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    short_term_goal_id INTEGER REFERENCES short_term_goals(id)
);

-- Create UserLongTermGoals table
CREATE TABLE user_long_term_goals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    long_term_goal_id INTEGER REFERENCES long_term_goals(id)
);

INSERT INTO short_term_goals (short_term_goal)
VALUES
  ('Learn more about investing'),
  ('Track spending patterns'),
  ('Diversify portfolio'),
  ('Set a savings target');

INSERT INTO long_term_goals (long_term_goal) 
VALUES
  ('Create a passive income stream'),
  ('Build a legacy portfolio'),
  ('Build a retirement fund'),
  ('Fund a major life goal');

INSERT INTO user_long_term_goals (user_id, long_term_goal_id)
VALUES
  (1, 1),
  (1, 2);

INSERT INTO user_short_term_goals (user_id, short_term_goal_id)
VALUES
  (2, 3),
  (2, 1);