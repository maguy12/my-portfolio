-- ===== USERS =====
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  avatar TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ===== MESSAGES =====
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ===== INDEX PERFORMANCE =====
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_messages_user ON messages(user);

-- ===== DEFAULT TEST DATA (OPTIONNEL) =====
INSERT INTO users (name, email, password)
VALUES ('Octavio', 'octaviowinawina4@gmail.com', '1234');

INSERT INTO messages (user, message)
VALUES ('Octavio', 'Bienvenue sur le chat 🔥');
