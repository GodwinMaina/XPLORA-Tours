
import mssql from 'mssql';
import { User } from "../interface/userInterface";
import { sqlConfig } from '../sqlconfig/sqlConfig';
import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { v4 } from 'uuid';
import bcrypt from 'bcrypt'
import { bookingInterface } from '../interfaces/booking.interface';



//...............signUp user.......................
export const signupUser = async (req: Request, res: Response) => {
    try {
    
        const { userName, email, password } = req.body;
        const id = v4();

        const hashPwd = await bcrypt.hash(password,6)

        // let {error} = registerUserValidator.validate(req.body) 
        // if(error){
        //     return res.status(404).json({
        //         error: error.details[0].message
        //     })
        // }

        if (!password) {
            return res.status(400).json({
                error: "Password is required"
            });
        }
        const emailExists = await checkIfEmailExists(email);
        if (emailExists) {
            return res.status(400).json({
                error: 'Email is already registered',
            });
        }

        const pool = await mssql.connect(sqlConfig);

        const userSign = (await pool.request()
        .input("user_id", mssql.VarChar, id)
        .input("userName", mssql.VarChar, userName)
        .input("email", mssql.VarChar, email)
        .input("password", mssql.VarChar, hashPwd)
        .execute('registerUser')
    ).rowsAffected;

        console.log(userSign);

        if (userSign) {
            return res.json({
                message: "Account created successfully",
              
            });
        } else {
            return res.json({ error: "An error occurred while." });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        return res.json({ error: " The user account was not created." });
    }


    async function checkIfEmailExists(email: string): Promise<boolean> {
        const pool = await mssql.connect(sqlConfig);

        const result = await pool
            .request()
            .input('email', mssql.VarChar, email)
            .query('SELECT COUNT(*) AS count FROM Users WHERE email = @email');

        return result.recordset[0].count > 0;
    }
};


//..................createTour............................

export const createTour = async (req: Request, res: Response) => {
    try {
        const {tour_img, tourName, tourInfo,location,date,price,tourType} = req.body;

        const id =v4();

        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input("tour_id", mssql.VarChar, id)
            .input("tour_img", mssql.VarChar, tour_img)
            .input('tourName', mssql.VarChar, tourName)
            .input('tourInfo', mssql.VarChar, tourInfo)
            .input('location', mssql.VarChar, location)
            .input('date', mssql.VarChar, date)
            .input('price', mssql.VarChar, price)
            .input('tourType', mssql.VarChar, tourType)
            .execute('createTours');

            console.log(result);
            return res.status(200).json({
                message: 'Tour created successfully',
            });

    }

    catch (error) {
        console.error("Error creating Tour:", error);
        return res.status(500).json({ error: "An error occurred while creating the task." });
    }

}


//...............get Tours...........................

export const getAllTours = async (req: Request, res: Response) => {

    try {
       const pool = await mssql.connect(sqlConfig);
        //query to fetch FROM Tour TABLE
        const message = await pool.query('SELECT * FROM Tours');
        res.json({
            message: message.recordset
        });
    }
        catch (error) {
            console.error("error can't get from the Table Tour");
            res.status(500).send('Server Error');
        }
};

//...............End of get Tours...........................

export const getSingleTour = async (req: Request, res: Response)=>{


    const tour_id = req.params.id;
     const pool = await mssql.connect(sqlConfig);

    try{
       
       const tour = (
        //query to fetch FROM Tour TABLE by tour_id
         await pool.request()
        .input("tour_id", mssql.VarChar, tour_id)
        .query('SELECT * FROM Tours WHERE tour_id=@tour_id')
         ).recordset;

         return res.json({
            tour,
        });
    }

    catch{
        console.log("cant get the tour");
        
    }
}



export const getAllUsers = async (req: Request, res: Response)=>{


    try{
        const pool = await mssql.connect(sqlConfig);
        //query to fetch FROM Tour TABLE
        const message = await pool.query('SELECT * FROM Users');
        res.json({
            message: message.recordset
        });
    }
    catch(error)
    {

        console.log(error);
        console.log("error all users cant be get");   

    }

}

//book tours
export const bookTours = async(req:Request,res:Response)=>{

    try{

        const {tour_id, user_id}: bookingInterface = req.body;
        console.log("Booking Reqbody",req.body);
        
        const id =v4();

        const pool = await mssql.connect(sqlConfig);

        const message = (await pool.request()
            .input("booking_id", mssql.VarChar, id)
            .input("tour_id", mssql.VarChar, tour_id)
            .input("user_id", mssql.VarChar, user_id)
            .execute('createBooking')).rowsAffected;

            console.log(message);
            return res.status(200).json({
                message: 'WOWWWWWWWWWWWWWWW YOUR Booking successfully created',
                
            });

    }

    catch(error){
        console.log(error);
      
    }

} 


//get allbooked Tours

export const AllBookedTours = async (req: Request, res: Response) => {
    try {
        // Connect to the database
        const pool = await mssql.connect(sqlConfig);

        // Query to fetch data from the Bookings table joined with Tours and Users tables
        const query = `
            SELECT 
                B.booking_id, 
                B.tour_id, 
                B.user_id, 
                T.tourName,
                T.date,
                T.location,
                T.tourType,
                T.tour_img, 
                U.userName, 
                U.email 
            FROM 
                Bookings B 
                JOIN Tours T ON B.tour_id = T.tour_id 
                JOIN Users U ON B.user_id = U.user_id
        `;

        // Execute the query
        const result = await pool.query(query);

        // Send the response with the fetched data
        res.json({ message: result.recordset });
    } catch (error) {
        console.error("Error fetching booked tours:", error);
        res.status(500).send('Server Error');
    }
};


//get booked Tour by User_id
export const UserBookedTour = async (req: Request, res: Response) => {
    const user_id = req.params.id;
    const pool = await mssql.connect(sqlConfig);

    try {
        const bookedTour = (
            await pool.request()
                .input("user_id", mssql.VarChar, user_id)
                .query(`
                SELECT B.*, T.tourName, T.tour_img, T.location, T.date, U.email
                FROM Bookings AS B
                INNER JOIN Tours AS T ON B.tour_id = T.tour_id
                INNER JOIN Users AS U ON B.user_id = U.user_id
                WHERE B.user_id = @user_id
                
                `)
        ).recordset;

        return res.json({
            bookedTour,
        });
    } catch (error) {
        console.error("Error fetching booked tours:", error);
        return res.status(500).json({ error: "An error occurred while fetching booked tours" });
    }
}




// Delete tour by id
export const deleteTour = (async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);

        if (pool.connected) {
            const tour_id = req.params.id;

            const result = (await pool.request()
                .input("tour_id", mssql.VarChar, tour_id)
                .execute("deleteTour")).rowsAffected

            if (result[0] == 0){
                res.status(201).json({
                    error: "Could not delete tour"
                })
            } else {
                res.status(200).json({
                    success: "Deleted successfully",
                    result
                })
            }
        } else {
            res.status(502).json({
                error: "Could not create pool connection"
            })
        }
    } catch (error) {
        res.status(500).json([
            error
        ])
    }
})
