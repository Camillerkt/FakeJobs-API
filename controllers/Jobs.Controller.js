const express = require("express");
const router = express.Router();
const JobsModel = require("../models/Jobs.Model.js");

// eg : http://localhost/jobs?city=Paris&fullTimeValue=false&content=xyz
router.get("/", (req, res) => {
  const jobsInformations = req.query;
  const jobs = new JobsModel.Jobs(jobsInformations);
  jobs.getJobs().then((result) => res.status(200).json(result));
});

module.exports = router;
