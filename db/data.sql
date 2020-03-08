USE
    emp_portal_server;

/* ---------- INSERT USERS FOR ACCESS ---------- */
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail1@test.com' ,'$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail2@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail4@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail5@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail6@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail7@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail8@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail9@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');
INSERT INTO `user_access`(`user_id`, `user_email`,`user_password`)
VALUES (UUID(),'mail10@test.com','$2b$08$zTNmawI0Uc3/4pSOkxQUFenSKIHOtYVJdsxOL7WOiNCh0x6BLCrE6');




INSERT INTO `user_role`(`user_role_id`, `user_role_name`)
VALUES (1,'employee');
INSERT INTO `user_role`(`user_role_id`, `user_role_name`)
VALUES (2,'administrator');