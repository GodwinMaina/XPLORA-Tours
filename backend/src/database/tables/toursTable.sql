CREATE TABLE Tours
(
    tour_id VARCHAR(250) PRIMARY KEY,
    tour_img VARCHAR(250) NOT NULL,
    tourName VARCHAR(250) NOT NULL,
    tourInfo VARCHAR(250) NOT NULL,
    location VARCHAR(250) NOT NULL,
    date VARCHAR(250) NOT NULL,
    price VARCHAR(250) NOT NULL,
    tourType VARCHAR(250) NOT NULL
   
)

SELECT *FROM Tours


DELETE FROM Tours
WHERE tour_id='7c164a87-db14-4766-a598-8287f3d368cf'