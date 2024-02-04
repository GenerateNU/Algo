-- init.sql
DROP TABLE IF EXISTS users;

CREATE TYPE risk_tolerance_enum AS ENUM ('low', 'medium', 'high');

CREATE TABLE users (
    id SERIAL PRIMARY KEY, -- user id
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    pass_word VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    risk_tolerance risk_tolerance_enum,
    years_of_experience INTEGER
);

  -- Insert sample data into "users" table
INSERT INTO users (first_name, last_name, pass_word, email, username, risk_tolerance, years_of_experience)
VALUES
    ('Ania', 'Misiorek', 'password1', 'email1@gmail.com', 'Ania_misi', 'medium', 4),
    ('Leroy', 'Shaigorodsky', 'password2', 'email2@gmail.com', 'Leroy_shai', 'medium', 1),
    ('John', 'Doe', 'P4ssw0rd', 'email3@gmail.com', 'John', 'low', 0),
    ('Jane', 'Smith', 'r8ndpass', 'email4@gmail.com', 'Jane', 'high', 6),
    ('Michael', 'Johnson', 'passw0rd', 'email5@gmail.com', 'MJohnson', 'low', 5),
    ('Emily', 'Brown', 'S3CuRr1ty', 'email6@gmail.com', 'EmBrown', 'medium', 3),
    ('David', 'Davis', 'p@ssw0rD', 'email7@gmail.com', 'DavDavis', 'low', 8),
    ('Sarah', 'Wilson', 'R4nd0mp4', 'email8@gmail.com', 'SrahWilson','high', 10),
    ('Daniel', 'Taylor', 'p@3sw0rd', 'email9@gmail.com', 'DT', 'low', 4),
    ('Olivia', 'Anderson', 'secur1ty', 'email10@gmail.com', 'Olive', 'low', 3),
    ('Matthew', 'Thomas', 'r4nD0mp4', 'email11@gmail.com', 'MattThomas', 'medium', 0),
    ('Sophia', 'Martinez', 'p4s3w0rd', 'email12@gmail.com', 'SophMart', 'high', 5),
    ('James', 'Hernandez', 's3cuUR1ty', 'email13@gmail.com', 'JHernandez', 'medium', 4),
    ('Emma', 'Lopez', 'r4nd0mP4', 'email14@gmail.com', 'EmLo', 'high', 3),
    ('Benjamin', 'Gonzalez', 'P@ssw0rd', 'email15@gmail.com', 'benny', 'low', 2),
    ('Ava', 'Perez', 'Ss3cur1ty', 'email16@gmail.com', 'ava_pz', 'medium', 1),
    ('William', 'Smith', 'r4nd0mp', 'email17@gmail.com', 'Bill.Smith', 'low', 0),
    ('Mia', 'Johnson', 'p4ssw0rd', 'email18@gmail.com', 'mia_johnson', 'medium', 0),
    ('Alexander', 'Brown', 's3cur1tYY', 'email19@gmail.com', 'brown_a', 'low', 3),
    ('Sofia', 'Davis', 'r4nd0m', 'email20@gmail.com', 'so_.davis', 'low', 2),
    ('Adam', 'Ma', 'password', 'email21@gmail.com', 'adam', 'high', 3),
    ('Madam', 'Ahh', 'password', 'email22@gmail.com', 'madam', 'high', 3);
    
