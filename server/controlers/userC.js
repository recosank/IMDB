import userDb from "./../models/userModel.js"
import watchlistDb from './../models/watchlistModel.js'
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import fs from 'fs'
import path from "path";
import { __dirname } from './../index.js'
import bannerModelDb from "../models/trailersModel.js";
import { validationResult } from "express-validator";

const secret =
  "asjkdfa5s4df658ar64f3a54f5425253456544@#%@%^%$^!#$%@#RCFDSVV#$%";

export const signupUser = async (req, res) => {
  console.log(req.body);
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    const { name, email, password, confirmPassword } = req.body;
    const existedUser = await userDb.findOne({ email });
    if (existedUser)
      return res.status(400).json({ message: "user already existed" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "password do not match" });
    const hasedPasswd = await bcrypt.hash(password, 12);
    const pfimgdata = fs.readFileSync(
      path.join(__dirname + "/uploads/" + req.file.filename)
    );
    const user = await userDb.create({
      name,
      email,
      password: hasedPasswd,
      pfimg: { data: pfimgdata },
    });
    const userWatchlist = await watchlistDb.create({ user: user._id });
    const token = jwt.sign(
      { email: user.email, name: user.name, id: user._id },
      secret,
      { expiresIn: "8h" }
    );
    const profile = {
      name: user.name,
      email: user.email,
      image: user.pfimg,
      token: token,
    };
    res.status(201).json({ profile });
  } catch (error) {
    console.log(error);
  }
};

export const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await userDb.findOne({ email });
    if (!User) return res.status(404).json({ message: "user not existed" });
    const hasedPasswd = await bcrypt.compare(password, User.password);
    if (!hasedPasswd)
      return res.status(400).json({ message: "invalid credentials" });
    const token = jwt.sign(
      { email: User.email, name: User.name, id: User._id },
      secret,
      { expiresIn: "8h" }
    );
    const existedUser = {
      name: User.name,
      email: User.email,
      image: User.pfimg,
      token: token,
    };
    res.status(201).json({ existedUser });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.body;
    let watchlist = await watchlistDb.findOne({ userId: req.userId }); //.populate('watchlist')
    let dats = await bannerModelDb.findById(id);

    if (
      watchlist.list.length > 0 &&
      watchlist.list.some((val) => {
        return val._id.toString() == id.toString();
      })
    ) {
      console.log("pll");
      await watchlistDb.findOneAndUpdate(
        { userId: req.userId },
        {
          $pull: {
            list: dats,
          },
        },
        { new: true, findAndModify: true }
      );

      res.status(204).json({ message: "removed successfully" });
    } else {
      console.log("psh");
      await watchlistDb.findOneAndUpdate(
        { userId: req.userId },
        {
          $push: {
            list: dats,
          },
        },
        { new: true, findAndModify: true }
      );

      res.status(200).json({ message: "added successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

