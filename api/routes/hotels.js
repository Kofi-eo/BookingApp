import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
} from "../controllers/hotels.js";
import Hotel from "../models/hotels.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", async (req, res) => {
  const failed = true;
  if (failed) return next(createError(401, "You are not Authenticated"));
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
});

export default router;
