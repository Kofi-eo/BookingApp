import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hotel endpoint");
});

export default router;
