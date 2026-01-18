const express = require("express");
const mobileController = require("../controllers/mobileController");

const router = express.Router();

router
  .route("/")
  .get(mobileController.getAllMobiles)
  .post(mobileController.createMobile);

router
  .route("/:id")
  .get(mobileController.getMobile)
  .patch(mobileController.updateMobile)
  .delete(mobileController.deleteMobile);

router.route("/category/:category").get(mobileController.getMobilesByCategory);

router
  .route("/subcategory/:subCategory")
  .get(mobileController.getMobilesBySubCategory);

module.exports = router;