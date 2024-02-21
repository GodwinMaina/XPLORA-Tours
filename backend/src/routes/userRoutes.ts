
import{Router} from "express";
import { AllBookedTours, UserBookedTour, bookTours, createTour, getAllTours, getAllUsers, getSingleTour, signupUser } from "../controllers/userController";
import { loginUser } from "../authentications/authLogin";
import { verifyToken } from "../middlewares/verifyToken";
verifyToken

const router = Router();

//signup
router.post('/signup', signupUser);


router.post('/auth/login',loginUser);

router.get('/allUsers' , getAllUsers)

router.post('/createTours', createTour);



router.get('/Tours', getAllTours);


//get a single tour by tour_id
router.get('/Tours/:id', getSingleTour);


router.post('/bookings', bookTours)

//admin get all tours
router.get('/bookedTours', AllBookedTours);


router.get('/booked:id', UserBookedTour)
export default router;









// router.post('/admin' verifyToken, adminProtected)
// router.post('/users' verifyToken, userProtected)
