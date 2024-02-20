CREATE TABLE Users
(
    user_id VARCHAR(250) PRIMARY KEY,
    userName VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    isAdmin BIT default 0
    
)

UPDATE Users 
SET isAdmin = 1
where user_id ='d2c09626-7383-4498-8ce2-6ca9da65162b'

ALTER TABLE Users
ADD isWelcomed BIT default 0



ALTER TABLE Users
ADD isDeleted BIT default 0


SELECT *FROM Users;


-- updating 
UPDATE Users
SET isWelcomed = 0

UPDATE Users
SET isDeleted = 0



