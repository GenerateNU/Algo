-- init.sql
DROP TABLE IF EXISTS users;

-- Create User table
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
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
  --  ('Michael', 'Johnson', 'passw0rd', 'email5@gmail.com', 'MJohnson', 'low', 5),
  --  ('Emily', 'Brown', 'S3CuRr1ty', 'email6@gmail.com', 'EmBrown', 'medium', 3),
  --  ('David', 'Davis', 'p@ssw0rD', 'email7@gmail.com', 'DavDavis', 'low', 8),
  --  ('Sarah', 'Wilson', 'R4nd0mp4', 'email8@gmail.com', 'SrahWilson','high', 10),
  --  ('Daniel', 'Taylor', 'p@3sw0rd', 'email9@gmail.com', 'DT', 'low', 4),
  --  ('Olivia', 'Anderson', 'secur1ty', 'email10@gmail.com', 'Olive', 'low', 3),
  --  ('Matthew', 'Thomas', 'r4nD0mp4', 'email11@gmail.com', 'MattThomas', 'medium', 0),
  --  ('Sophia', 'Martinez', 'p4s3w0rd', 'email12@gmail.com', 'SophMart', 'high', 5),
  --  ('James', 'Hernandez', 's3cuUR1ty', 'email13@gmail.com', 'JHernandez', 'medium', 4),
  --  ('Emma', 'Lopez', 'r4nd0mP4', 'email14@gmail.com', 'EmLo', 'high', 3),
  --  ('Benjamin', 'Gonzalez', 'P@ssw0rd', 'email15@gmail.com', 'benny', 'low', 2),
  --  ('Ava', 'Perez', 'Ss3cur1ty', 'email16@gmail.com', 'ava_pz', 'medium', 1),
  --  ('William', 'Smith', 'r4nd0mp', 'email17@gmail.com', 'Bill.Smith', 'low', 0),
  --  ('Mia', 'Johnson', 'p4ssw0rd', 'email18@gmail.com', 'mia_johnson', 'medium', 0),
  --  ('Alexander', 'Brown', 's3cur1tYY', 'email19@gmail.com', 'brown_a', 'low', 3),
  --  ('Sofia', 'Davis', 'r4nd0m', 'email20@gmail.com', 'so_.davis', 'low', 2),
  --  ('Adam', 'Ma', 'password', 'email21@gmail.com', 'adam', 'high', 3),
  --  ('Madam', 'Ahh', 'password', 'email22@gmail.com', 'madam', 'high', 3);
    
