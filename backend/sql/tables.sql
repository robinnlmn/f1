CREATE TABLE IF NOT EXISTS "users"(
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL UNIQUE,
    "picture" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "locale" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "joined" DATE NOT NULL
);