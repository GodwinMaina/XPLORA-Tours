

CREATE TABLE Reviews (
    review_id VARCHAR(250) PRIMARY KEY,
    tour_id VARCHAR(250) NOT NULL,
    user_id VARCHAR(250) NOT NULL,
    Review TEXT,
    Rating INT NOT NULL,
    Reccommendation TEXT,


    CONSTRAINT FK_Reviews_Users FOREIGN KEY (user_id)
    REFERENCES Users(user_id),
    
    CONSTRAINT FK_reviews_Tours FOREIGN KEY(tour_id)
    REFERENCES Tours(tour_id)

)

DROP TABLE Reviews


SELECT *FROM Reviews