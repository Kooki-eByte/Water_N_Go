import { Router } from "express";
import {
  addPlant,
  deletePlant,
  getPlants,
} from "../../controller/plantController";

const router = Router();

// /api/plant/
router.route("/:userId").get(getPlants);

// /api/plant/add
router.route("/add").post(addPlant);

// /api/plant/delete
router.route("/delete").delete(deletePlant);

// TODO - Create a update route to update info of the plant

module.exports = router;
