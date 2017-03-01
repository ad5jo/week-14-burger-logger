SELECT * FROM burgers_db.burgers;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured, date) VALUES ('South Park Slider', false, '2017-02-01 12:13:14');
INSERT INTO burgers (burger_name, devoured) VALUES ('Gut Grinder', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Lizard Scale', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Happy Meal Single with Cheese', false);

