import Hotel from "../models/hotels.js";

export const createHotel = async (req, res, next) => {
  router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (err) {
      next(err);
    }
  });
};

export const updateHotel = async (req, res, next) => {
  router.put("/:id", async (req, res) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(savedHotel);
    } catch (err) {
      next(err);
    }
  });
};

export const deleteHotel = async (req, res, next) => {
  router.delete("/:id", async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted");
    } catch (err) {
      next(err);
    }
  });
};

export const getHotel = async (req, res, next) => {
  router.get("/:id", async (req, res) => {
    try {
      const hotel = await Hotel.findByIdAndUpdate(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  });
};

export const getAllHotel = async (req, res, next) => {
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
};
