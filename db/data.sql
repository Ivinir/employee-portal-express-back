USE
    emp_portal_server;

/* ---------- INSERT USERS FOR ACCESS ---------- */
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress1@test.com' ,'password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress2@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress4@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress5@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress6@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress7@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress8@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress9@test.com','password1','employee');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`,`user_role`)
VALUES (UUID_TO_BIN(UUID()),'emailaddress10@test.com','password1','employee');

