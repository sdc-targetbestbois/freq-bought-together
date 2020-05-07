DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  itemName VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  category VARCHAR(255) NOT NULL,
  imageLink VARCHAR(255) NOT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */

INSERT INTO items (id, itemName, price, category, imageLink) VALUES (1, 'Date with John Snow', 90, 'Misc', 'https://i.ibb.co/Fh0Jkwh/1dateBoy.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (2, 'Date with Daenerys', 30, 'Misc', 'https://i.ibb.co/ryr4j8V/2date-Girl.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (3, 'Stone Skin Halloween Mask', 64, 'Apparell', 'https://i.ibb.co/vDJSJdb/3halloween-Mask.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (4, 'Greyscale, Home Remedy Kit', 62, 'Misc', 'https://i.ibb.co/R0TH7TW/4home-Remedy-Kit.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (5, 'Undead Flame Bear', 43, 'Critters', 'https://i.ibb.co/0j6b7t1/5undead-Flame-Bear.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (6, 'Generic Undead Bear', 40, 'Critters', 'https://i.ibb.co/4R17xWS/6generic-Undead-Bear.png');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (7, 'Undead Dragon Ride Groupon', 78, 'Critters', 'https://i.ibb.co/gzyxNr2/7dragon-Ride-Groupon.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (8, 'White Walker Ultra Ashy Skin Moisturizer', 86, 'Misc', 'https://i.ibb.co/8PhPn6D/8skin-Moisturizer.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (9, 'Mega Fat Destroyer 1000', 20, 'Misc', 'https://i.ibb.co/7CL0L1z/9mega-Fat-Destroyer.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (10, 'Angry Dog', 57, 'Critters', 'https://i.ibb.co/nm6h9ts/10angry-Dog.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (11, 'Questionably Dangerous Wolf', 60, 'Critters', 'https://i.ibb.co/dgx1DGn/11questionably-Dangerous-Wolf.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (12, 'Collectors Edition Genuine Dragon Eggs', 75, 'Collectables', 'https://i.ibb.co/tbZVR95/12collectors-Dragon-Eggs.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (13, 'Blood Witch Anti Aging Techniques', 45, 'Misc', 'https://i.ibb.co/4RZ2S8w/13aging-Cream.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (14, 'Custom Enemy/Heathen Burning Groupon', 13, 'Misc', 'https://i.ibb.co/Mk1yBd1/14custom-Heathen-Burning-Groupon.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (15, 'Street Rods Custom High Performance Wheelchair', 61, 'Apparell', 'https://i.ibb.co/YXSHQGm/15wheelchair.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (16, 'Ultimate Guide to Rolling Your Eyes Harder Than Anyone', 59, 'Misc', 'https://i.ibb.co/Vp93k6h/16ultimate-Eye-Roller-Guide.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (17, '24k Gold Karate Chop Enhancer', 79, 'Apparell', 'https://i.ibb.co/kS70PZv/17gold-Karate-Chop-Enahncer.png');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (18, 'Super Reliable Bottle Opener, Jaime Lanister', 11, 'Misc', 'https://i.ibb.co/F08dHph/18super-Reliable-Bottle-Opener.jpg');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (19, 'Ultra Tacky Game of Thrones Shirt', 38, 'Apparell', 'https://i.ibb.co/yRddjGP/19tacky-Game-Of-Thrones-Shirt.png');
INSERT INTO items (id, itemName, price, category, imageLink) VALUES (20, 'Mountain Armor', 61, 'Apparell', 'https://i.ibb.co/0V9kTdf/20mountain-Armor.jpg');