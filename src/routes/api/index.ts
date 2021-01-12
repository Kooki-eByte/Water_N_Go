import { Router } from "express";
const router = Router();
const plant = require("./consoleLog");

// TODO : These will lead to the controller needed to do CRUD for MySQL DB
// This is a test route /api/plant
router.use("/plant", plant);

module.exports = router;
