CREATE TABLE Bookings(

    booking_id  VARCHAR(250) PRIMARY KEY,
    tour_id VARCHAR(250) NOT NULL,
    user_id VARCHAR(250) NOT NULL,

    CONSTRAINT FK_Bookings_Users FOREIGN KEY (user_id)
    REFERENCES Users(user_id),

    CONSTRAINT FK_Bookings_Tours FOREIGN KEY (tour_id)
    REFERENCES Tours(tour_id)

)

SELECT *FROM Bookings

