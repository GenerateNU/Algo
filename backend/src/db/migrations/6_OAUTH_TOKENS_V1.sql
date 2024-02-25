DROP TABLE IF EXISTS oauth_tokens;

-- Create OAuthTokens table (Columns to define)
CREATE TABLE IF NOT EXISTS oauth_tokens (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    request_token VARCHAR,
    request_secret VARCHAR,
    access_token VARCHAR,
    access_secret VARCHAR,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


