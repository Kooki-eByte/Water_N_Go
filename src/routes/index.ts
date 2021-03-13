import { Router } from "express";

const apiRoute = require("./api");

const router = Router();

// url/api
router.use("/api", apiRoute);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
