CREATE OR ALTER PROCEDURE createReviews (
    @review_id  VARCHAR(250),
    @user_id  VARCHAR(250),
    @tour_id  VARCHAR(250),
    @rating INT,
    @comment TEXT
)
AS 
BEGIN
    INSERT INTO Reviews(review_id, user_id, tour_id, rating, comment)
    VALUES(@review_id, @user_id, @tour_id, @rating, @comment)
END