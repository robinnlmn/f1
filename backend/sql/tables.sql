-- Enable foreign key support
PRAGMA foreign_keys = ON;

-- Create users table if it does not exist
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    picture TEXT NOT NULL,
    points INTEGER NOT NULL DEFAULT 0,
    locale TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    joined DATE NOT NULL
);

-- Create games table if it does not exist
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date DATE NOT NULL,
    ends TIMESTAMP NOT NULL,
    country TEXT NOT NULL,
    ended INTEGER NOT NULL DEFAULT 0
);

-- Create guess table if it does not exist
CREATE TABLE IF NOT EXISTS guess (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game INTEGER NOT NULL,
    user INTEGER NOT NULL UNIQUE,
    "1" TEXT NOT NULL,
    "2" TEXT NOT NULL,
    "3" TEXT NOT NULL,
    "4" TEXT NOT NULL,
    "5" TEXT NOT NULL,
    "6" TEXT NOT NULL,
    "7" TEXT NOT NULL,
    "8" TEXT NOT NULL,
    "9" TEXT NOT NULL,
    "10" TEXT NOT NULL,
    "11" TEXT NOT NULL,
    "12" TEXT NOT NULL,
    "13" TEXT NOT NULL,
    "14" TEXT NOT NULL,
    "15" TEXT NOT NULL,
    "16" TEXT NOT NULL,
    "17" TEXT NOT NULL,
    "18" TEXT NOT NULL,
    "19" TEXT NOT NULL,
    "20" TEXT NOT NULL,
    fastest_lap TEXT NOT NULL,
    
    -- Add UNIQUE constraint and FOREIGN KEY constraints if they do not exist
    FOREIGN KEY(game) REFERENCES games(id),
    FOREIGN KEY(user) REFERENCES users(id)
);