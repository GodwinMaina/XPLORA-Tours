CREATE OR ALTER PROCEDURE createBooking(
    @booking_id VARCHAR(250),
    @user_id VARCHAR(250),
    @tour_id VARCHAR(250)
)
AS
BEGIN

 INSERT INTO Bookings (booking_id, tour_id, user_id)
        VALUES (@booking_id, @tour_id, @user_id);
   END      

    BEGIN TRY
        -- Check if user exists
        IF NOT EXISTS (SELECT 1 FROM Users WHERE user_id = @user_id)
        BEGIN
            THROW 50001, 'User with the provided user_id does not exist.', 1;
        END

        -- Insert booking
        INSERT INTO Bookings (booking_id, tour_id, user_id)
        VALUES (@booking_id, @tour_id, @user_id);
    END TRY
    BEGIN CATCH
        -- Handle error
        DECLARE @ErrorMessage NVARCHAR(4000);
        DECLARE @ErrorSeverity INT;
        DECLARE @ErrorState INT;

        SELECT
            @ErrorMessage = ERROR_MESSAGE(),
            @ErrorSeverity = ERROR_SEVERITY(),
            @ErrorState = ERROR_STATE();

       
    END CATCH
END
