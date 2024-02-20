
import{Router} from "express";
import { createTour, getAllTours, getSingleTour, signupUser } from "../controllers/userController";
import { loginUser } from "../authentications/authLogin";
import { verifyToken } from "../middlewares/verifyToken";
verifyToken

const router = Router();

//signup
router.post('/signup', signupUser);


// auth/login
router.post('/auth/login',loginUser);


//createTours
router.post('/createTours', createTour);


//getAllTours display only if user logged in.
router.get('/Tours', getAllTours);

//display tours homepage

//get a single tour by tour_id
router.get('/Tours/:id', getSingleTour);


// router.post('/admin' verifyToken, adminProtected)
// router.post('/users' verifyToken, userProtected)


export default router;