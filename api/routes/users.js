import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/users.js";
import User from "../models/users.js";
import { createError } from "../utils/error.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello User, you are logged in");
});

//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getAllUser);

export default router;
