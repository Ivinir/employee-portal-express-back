DROP
    DATABASE IF EXISTS emp_portal_server;
CREATE DATABASE IF NOT EXISTS emp_portal_server; USE
    emp_portal_server;

    /* ---------- USER ACCESS ---------- */
DROP TABLE IF EXISTS
    `user_access`;
CREATE TABLE `user_access`(
    `user_id` BINARY(16) PRIMARY KEY,
    `user_email` VARCHAR(100) NOT NULL,
    `user_password` VARCHAR(100) NOT NULL,
    `user_role` VARCHAR(100) NOT NULL
); ALTER TABLE
    `user_access` ADD UNIQUE(`user_email`);