import { Router } from "express";
import { addUser, loginUser } from "../../controller/userController";

const router = Router();

// /api/user/
router.route("/").get(loginUser);

// /api/user/add
router.route("/add").post(addUser);

module.exports = router;
