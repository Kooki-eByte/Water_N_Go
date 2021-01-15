import { Router } from "express";
const router = Router();
const plant = require("./plantDB");
const user = require("./userDB");

// /api/plant
router.use("/plant", plant);

// /api/user
router.use("/user", user);

module.exports = router;
