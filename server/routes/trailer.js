import express from "express";
import {
  getToday,
  getTrailer,
  getAll,
  getAvatar,
  ratingUpdate,
} from "../controlers/post.js";
import { signinUser, signupUser, updateProfile } from "../controlers/userC.js";
import multer from "multer";
import auth from "../middleware/auth.js";
import bodyValidator from "../middleware/bodyValidate.js";

const imgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: imgStorage });

const router = express.Router();
router.get("/gettrailer", auth, getAll);
router.post(
  "/addtrailer",
  upload.fields([
    { name: "MImage", maxCount: 1 },
    { name: "PImage", maxCount: 1 },
  ]),
  getTrailer
);
router.post("/addtoday", upload.single("FImage"), getToday);
router.post("/addavatar", upload.single("AImage"), getAvatar);
router.post("/signup", upload.single("pfimg"), signupUser);
router.post("/signin", upload.single("pfimg"), signinUser);
router.patch("/update", auth, updateProfile);
router.patch("/rating", auth, ratingUpdate);
export default router;
