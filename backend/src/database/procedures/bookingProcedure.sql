CREATE OR ALTER PROCEDURE createBooking(
    @booking_id VARCHAR(250),
    @user_id  VARCHAR(250),
    @tour_id  VARCHAR(250)
)
AS
BEGIN
    INSERT INTO Bookings(booking_id, tour_id, user_id)
    VALUES(@booking_id, @tour_id, @user_id)
END