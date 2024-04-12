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
    image_url VARCHAR DEFAULT 'https://cdn-icons-png.freepik.com/256/552/552848.png'
);

  -- Insert sample data into "users" table
INSERT INTO users (id, first_name, last_name, username)
VALUES
    ('user_2chL8dX6HdbBAuvu3DDM9f9NzKK', 'Ania', 'Misiorek', 'ania'),
    ('user_2cpFbBLPGkPbszijtQneek7ZJxg', 'Leroy', 'Shaigorodsky', 'leroy'),
    ('user_2dv5XFsCMYc4qLcsAnEJ1aUbxnk', 'Cam', 'Plume', 'campd10'),
    ('user_2cwGfu9zcjsbxq5Lp8gy2rkVNlc', 'Nathan', 'Jung', 'nathan'),
    ('user_2dvSY6HpxotzWCfch5m4a4OVpAK', 'Aryan', 'Kale', 'aryankale');
