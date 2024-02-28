import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import mssql from 'mssql'
import jwt from 'jsonwebtoken'
import { sqlConfig } from "../sqlconfig/sqlConfig";
// import { ExtendedUserRequest } from "../middlewares/verifyToken";
import { loginUserValidator } from "../validators/validators";
// import { any } from "joi";

const SECRET = 'Q45gt23crfe';


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        let { error } = loginUserValidator.validate(req.body);

        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }

        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input("email", mssql.VarChar, email)
            .query(`SELECT * FROM Users WHERE email = @email`);
            
        // Check if any record was returned
        const user = result.recordset;
        // console.log(user)

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        // Compare passwords
        const correctPwd = await bcrypt.compare(password,user[0].password)
        if (!correctPwd) {
            return res.status(401).json({
                error: "Incorrect password"
            });
        }

        const loginCredentials = user.map((response: { [x: string]: any; Password: any; userName: any; })=>{
            const {Password, ...rest} = response

            return rest
        })

        // console.log(loginCredentials)

        const token = jwt.sign(loginCredentials[0], SECRET, {
            expiresIn: '3600s'
        })


        return res.status(200).json({
            message: "Logged in successfully",
            token,
            ...loginCredentials[0]
        });

        
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};


