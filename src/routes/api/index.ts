import { Router } from "express";
const router = Router();
const plant = require("./plantDB");

// /api/plant
router.use("/plant", plant);

module.exports = router;
