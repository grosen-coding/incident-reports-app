const express = require("express");
const router = express.Router();
const {
  getReports,
  createReport,
} = require("../controllers/incidentController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getReports).post(protect, createReport);

module.exports = router;
