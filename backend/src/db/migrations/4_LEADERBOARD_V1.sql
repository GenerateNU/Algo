-- Create Leaderboard table(s)
DROP TABLE IF EXISTS leaderboards;
DROP TABLE IF EXISTS scores;

CREATE TABLE IF NOT EXISTS leaderboards (
  leaderboard_id SERIAL PRIMARY KEY,
  leaderboard_name VARCHAR(255) NOT NULL,
  leaderboard_description TEXT
);

CREATE TABLE IF NOT EXISTS scores (
  score_id SERIAL PRIMARY KEY,
  score INT NOT NULL,
  score_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  leaderboard_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (leaderboard_id) REFERENCES leaderboards(leaderboard_id)
);

-- Insert sample data into "leaderboards" table
INSERT INTO leaderboards (leaderboard_name, leaderboard_description)
VALUES
  ('Penny Stocks', 'Leaderboard for traders with the most successful penny stock trades.'),
  ('Blue Chip Stocks', 'Leaderboard for traders with the most successful blue chip stock trades.');

-- Insert sample data into "scores" table
INSERT INTO scores (score, user_id, leaderboard_id)
VALUES
  (100, 1, 1),
  (200, 2, 1),
  (150, 3, 1),
  (250, 4, 1),
  (300, 5, 1),
  (400, 6, 1),
  (20, 1, 2),
  (10, 2, 2),
  (30, 3, 2),
  (40, 4, 2),
  (50, 5, 2),
  (60, 6, 2);