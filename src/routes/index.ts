import { Router } from "express";
const apiRoute = require("./api");

const router = Router();

router.use("/api", apiRoute);

module.exports = router;
