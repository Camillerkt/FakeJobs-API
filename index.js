const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5500;

// controllers
const JobsController = require("./controllers/Jobs.Controller.js");

app.use(cors());
app.use(bodyParser.json());

app.use("/fakejobs/jobs", JobsController);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
