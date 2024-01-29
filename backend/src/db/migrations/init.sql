DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    pass_word VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);

-- Insert sample data into "users" table
INSERT INTO users (first_name, last_name, pass_word, email)
VALUES
    ('Ania', 'Misiorek', 'password1', 'email1@gmail.com'),
    ('Leroy', 'Shaigorodsky', 'password2', 'email2@gmail.com'),
    ('John', 'Doe', 'P4ssw0rd', 'email3@gmail.com'),
    ('Jane', 'Smith', 'r8ndpass', 'email4@gmail.com'),
    ('Michael', 'Johnson', 'passw0rd', 'email5@gmail.com'),
    ('Emily', 'Brown', 'S3CuRr1ty', 'email6@gmail.com'),
    ('David', 'Davis', 'p@ssw0rD', 'email7@gmail.com'),
    ('Sarah', 'Wilson', 'R4nd0mp4', 'email8@gmail.com'),
    ('Daniel', 'Taylor', 'p@3sw0rd', 'email9@gmail.com'),
    ('Olivia', 'Anderson', 'secur1ty', 'email10@gmail.com'),
    ('Matthew', 'Thomas', 'r4nD0mp4', 'email11@gmail.com'),
    ('Sophia', 'Martinez', 'p4s3w0rd', 'email12@gmail.com'),
    ('James', 'Hernandez', 's3cuUR1ty', 'email13@gmail.com'),
    ('Emma', 'Lopez', 'r4nd0mP4', 'email14@gmail.com'),
    ('Benjamin', 'Gonzalez', 'P@ssw0rd', 'email15@gmail.com'),
    ('Ava', 'Perez', 'Ss3cur1ty', 'email16@gmail.com'),
    ('William', 'Smith', 'r4nd0mp', 'email17@gmail.com'),
    ('Mia', 'Johnson', 'p4ssw0rd', 'email18@gmail.com'),
    ('Alexander', 'Brown', 's3cur1tYY', 'email19@gmail.com'),
    ('Sofia', 'Davis', 'r4nd0m', 'email20@gmail.com');
