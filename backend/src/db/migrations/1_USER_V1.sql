-- init.sql
DROP TABLE IF EXISTS users;

-- Create User table
CREATE TABLE users (
    "id" VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    image_url VARCHAR
);

  -- Insert sample data into "users" table
INSERT INTO users (id, first_name, last_name, username, image_url)
VALUES
    ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'Ania', 'Misiorek', 'ania', 'https://ca.slack-edge.com/T2CHL6FEG-U05QP4M4M3P-349be7323f07-512'),
    ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 'Leroy', 'Shaigorodsky', 'leroy', 'https://ca.slack-edge.com/T2CHL6FEG-U040ST08HM1-c3d453828123-512'),
    ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'Cam', 'Plume', 'campd10', 'https://ca.slack-edge.com/T2CHL6FEG-U06DCDZ3FB8-1c488c509f95-512'),
    ('user_2fFVsSf4viW9pjx6Sd5dxEgutJ1', 'Nathan', 'Jung', 'nathan', 'https://ca.slack-edge.com/T2CHL6FEG-U05QL55RDBQ-8fd6c3499cac-512'),
    ('user_2fFgdKCKoif7NYYDABfk4wLDgrm', 'Jessica', 'Luo', 'jessica', 'https://ca.slack-edge.com/T2CHL6FEG-U06D79LHPPC-f8bf37e63cd2-512'),
    ('user_2fFc7GSuJYpOJElO4iEchMUokCN', 'Adam', 'Ma', 'adam', 'https://ca.slack-edge.com/T2CHL6FEG-U05SGJYN7GW-dd92c4e92011-512'),
    ('user_2fKllee1LFjb1jY3Zwe3dXFX38Z', 'Jakob', 'Philippe', 'jakobphilippe', 'https://ca.slack-edge.com/T2CHL6FEG-U06CT4AR44W-b72441a8bb15-512');

    
