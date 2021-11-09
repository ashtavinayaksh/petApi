const express = require("express");
const mongoose = require("mongoose");
const Species = require("./model/species");
const Problem = require("./model/problem");
const ProblemDetail = require("./model/problemdetail");
const app = express();

app.use(express.json());

//mongodb+srv://anand:<password>@cluster0.xm9io.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
  "mongodb+srv://anand:1234567890@cluster0.xm9io.mongodb.net/petdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connection successfully Setup");
});

mongoose.connection.on("error", (err) => {
  console.log("err" + err);
});

app.use("/add", require("./controller/addDetails"));

app.get("/species/:specific", (req, res) => {
  Species.find({ species: req.params.specific }).then((specie) =>
    res.json(specie)
  );
});

app.get("/problem/:specific", (req, res) => {
  Problem.find({ problem: req.params.specific }).then((problem) =>
    res.json(problem)
  );
});

app.get("/problemDetail/:specific", (req, res) => {
  ProblemDetail.find({ _id: req.params.specific }).then((problemDetail) =>
    res.json(problemDetail)
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
