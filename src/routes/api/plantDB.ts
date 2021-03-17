import { Router } from "express";
import rateLimit from "express-rate-limit";
import {
  addPlant,
  deletePlant,
  getPlants,
  updatePlant,
} from "../../controller/plantController";

const apiLimiter = rateLimit({
  max: 10,
  windowMs: 30 * 1000,
  message: "Too many requests",
});

const router = Router();

// /api/plant/:userId
router.route("/:userId").get(getPlants);

// /api/plant/add
router.use("/add", apiLimiter, addPlant); // .post(addPlant);

// /api/plant/delete
router.route("/delete").delete(deletePlant);

// /api/plant/update
router.route("/update").put(updatePlant);

module.exports = router;
