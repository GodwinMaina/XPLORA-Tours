CREATE PROCEDURE createTours (
    @tour_id NVARCHAR(250),
    @tour_img NVARCHAR(1000),
    @TourName NVARCHAR(250),
    @tourInfo NVARCHAR(250),
    @location NVARCHAR(250),
    @date VARCHAR(250),
    @price NVARCHAR(250),
    @tourType NVARCHAR(250)
)
AS
BEGIN
    INSERT INTO Tours (tour_id, tour_img, tourName, tourInfo, location, date, price, tourType)

    VALUES (@tour_id, @tour_img, @tourName, @tourInfo, @location, @date, @price, @tourType)
END