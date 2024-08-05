CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');

ALTER TABLE items ADD COLUMN list_name VARCHAR(100);

UPDATE items SET list_name = 'Personal' WHERE id = 1;
UPDATE items SET list_name = 'School' WHERE id = 2;

INSERT INTO items (title, list_name) VALUES ('Buy groceries', 'Personal'), ('Complete project', 'Work');

ALTER TABLE items ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
