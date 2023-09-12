create database library;
-- CREATE TABLE `Author` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`Name` varchar NOT NULL,
-- 	`DOB` DATE NOT NULL,
-- 	`Nationality` varchar NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `Book` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`Title` varchar NOT NULL,
-- 	`Author` varchar NOT NULL,
-- 	`Category_id` INT NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `book_author` (
-- 	`book_id` INT NOT NULL AUTO_INCREMENT,
-- 	`author_id` INT NOT NULL,
-- 	PRIMARY KEY (`book_id`,`author_id`)
-- );

-- CREATE TABLE `Category` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`Name` varchar NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `Publisher` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`Name` varchar NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `Book_Copies` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`Publish_year` DATE NOT NULL,
-- 	`publish_id` INT NOT NULL,
-- 	`book_id` INT NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `Users` (
-- 	`card_number` INT NOT NULL,
-- 	`firstname` varchar NOT NULL,
-- 	`lastname` varchar NOT NULL,
-- 	`email` varchar NOT NULL,
-- 	`status` varchar NOT NULL,
-- 	PRIMARY KEY (`card_number`)
-- );

-- CREATE TABLE `Checkout` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`start_time` TIMESTAMP NOT NULL,
-- 	`end_time` TIMESTAMP NOT NULL,
-- 	`user_id` INT NOT NULL,
-- 	`bookcopy_id` INT NOT NULL,
-- 	`is_returned` BOOLEAN NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `waitlist` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`book_id` INT NOT NULL,
-- 	`user_id` INT NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );







