const fs = require("fs");

class Jobs {
  constructor(jobsInformations) {
    this.jobsArray = JSON.parse(fs.readFileSync("./assets/jobs.json"));
    this.jobsInformations = jobsInformations;
  }

  async getJobs() {
    // Search And Filtering REST API With Node And Espress : https://www.geeksforgeeks.org/how-to-implement-search-and-filtering-in-a-rest-api-with-node-js-and-express-js/

    const filteredJobs = this.jobsArray.filter((job) => {
      let isValid = true;
      for (let key in this.jobsInformations) {
        const paramValue = this.jobsInformations[key].toLowerCase();
        const jobValue = job[key].toLowerCase();
        isValid = isValid && jobValue.includes(paramValue);
      }
      return isValid;
    });

    // sort all values in filteredJobs by the value of the key "date" (most recent first)
    filteredJobs.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return filteredJobs;
  }
}

module.exports = { Jobs };
