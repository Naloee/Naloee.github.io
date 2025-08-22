CREATE TABLE edusigns(
id SERIAL PRIMARY KEY,
firstname TEXT NOT NULL,
lastname TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
user_id INTEGER REFERENCES users(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

-- Ajouter la colonne user_id
ALTER TABLE edusigns
    ADD COLUMN ...

-- Supprimer les anciennes colonnes
ALTER TABLE edusigns
    DROP COLUMN firstname,
    DROP COLUMN lastname,
    DROP COLUMN email;

INSERT INTO users (firstname, lastname, email) VALUES 
('Ada', 'Lovelace', 'ada@test.fr'),
('Beatrice', 'Worsley', 'bea@test.fr'),
('Bella', 'Guerin', 'bella@test.fr'),
('Barbara', 'Chase', 'barbara@test.fr');

INSERT INTO edusigns (user_id) VALUES 
(1),
(2),
(3),
(2),
(4);