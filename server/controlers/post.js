import bannerModelDb from "./../models/trailersModel.js";
import todayModelDb from "../models/featureModel.js";
import fs from "fs";
import path from "path";
import { __dirname } from "./../index.js";
import avatarDb from "../models/avatarModel.js";
import watchlistDb from "../models/watchlistModel.js";

export const getTrailer = async (req, res) => {
  try {
    const t = await bannerModelDb.create({
      title: req.body.title,
      name: req.body.name,
      context: req.body.context,
      MImage: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.files.MImage[0].filename)
        ),
      },
      PImage: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.files.PImage[0].filename)
        ),
      },
    });
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const pp = await bannerModelDb.find();
    const ff = await todayModelDb.find();
    const aa = await avatarDb.find();
    const yy = [];

    const wl = req.userId
      ? await watchlistDb.findOne({ user: req.userId })
      : [];
    const tt = {
      pp,
      ff,
      yy,
      aa,
      wl,
    };

    res.status(200).json(tt);
  } catch (error) {
    console.log(error);
  }
};

export const getToday = async (req, res) => {
  try {
    const t = todayModelDb.create({
      title: req.body.title,
      FImage: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
      },
    });
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};

export const getAvatar = async (req, res) => {
  try {
    const t = avatarDb.create({
      name: req.body.name,
      AImage: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
      },
    });
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};

export const ratingUpdate = async (req, res) => {
  try {
    const { iid } = req.body;
    const trailerFind = await bannerModelDb.findOne({ _id: iid._id });

    if (
      trailerFind.ratings.length > 0 &&
      trailerFind.ratings.some((val) => {
        return val._id.toString() == req.userId.toString();
      })
    ) {
      await bannerModelDb.updateOne(
        { "ratings._id": req.userId },
        { $set: { "ratings.$.rating": iid.rating } },
        {
          upsert: true,
          runValidators: true,
        }
      );
      res.status(204).json({ message: "updated rating" });
    } else {
      await bannerModelDb.findOneAndUpdate(
        { _id: iid._id },
        {
          $push: {
            ratings: {
              _id: req.userId,
              rating: iid.rating,
            },
          },
        },
        { new: true, findAndModify: false }
      );
      res.status(200).json({ message: "added successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};
