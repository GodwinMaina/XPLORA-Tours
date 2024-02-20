CREATE PROCEDURE registerUser
   ( @user_id NVARCHAR(250),
    @UserName NVARCHAR(250),
    @email NVARCHAR(250),
    @password NVARCHAR(250)
    )
AS
BEGIN
    INSERT INTO Users (user_id, userName, email, password)
    VALUES (@user_id, @UserName, @email, @password)
END
