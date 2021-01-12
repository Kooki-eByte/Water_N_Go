import { Router } from "express";
const router = Router();

router.route("/").get((req, res) => {
  res.json({
    plant: {
      name: "plant 1",
      isWatered: true,
      daysToWater: 2,
    },
  });
});

module.exports = router;
