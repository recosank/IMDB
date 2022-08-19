import express from "express";
import { getToday,getTrailer,getAll,getAvatar, ratingUpdate} from "../controlers/post.js";
import { signinUser,signupUser,updateProfile } from "../controlers/userC.js";
import multer from 'multer'
import auth from "../middleware/auth.js";
import bodyValidator from "../middleware/bodyValidate.js";


const imgStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"uploads")
    },
    filename:(req, file, cb) => {
        console.log('sf')
        console.log(file)
        cb(null,file.originalname + Date.now())
    }
})

const upload = multer({ storage: imgStorage })

const router = express.Router();
router.get('/p',auth,getAll)
router.post('/p',upload.fields([
    { name: 'MImage', maxCount: 1 },
    { name: 'PImage', maxCount: 1 },
  ]),getTrailer)
  
router.post('/f',upload.single('FImage'),getToday)
router.post('/a',upload.single("AImage"),getAvatar)
//router.post('/signup',[bodyValidator('signupuser'),upload.single("pfimg")],signupUser)
router.post('/signup',upload.single("pfimg"),signupUser)

router.post('/signin',upload.single("pfimg"),signinUser)
router.patch('/pu',auth,updateProfile)
router.patch('/rating',auth,ratingUpdate)
export default router