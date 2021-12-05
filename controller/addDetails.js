const express = require("express");
const Problem = require("../model/problem");
const Species = require("../model/species");
const ProblemDetail = require("../model/problemdetail");
const router = express.Router();

router.get("/addproblem", (req, res) => {
  console.log(req.body);
  //   const {problem,problemDetails} ={...req.body};
  const problem1 = new Problem(req.body);

  problem1
    .save()
    .then((result) => {
      res.json({ problem: result });
      // console.log(req.user)
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/addspecies", (req, res) => {
  const species = req.body.species;
  const id = req.body.id;
  const species1 = new Species({ species, problems: id });
  console.log(species);

  species1
    .save()
    .then((result) => {
      res.json({ problem: result });
      // console.log(req.user)
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/problemDetail", (req, res) => {
  const problemDetail = req.body;
  const problemDetail1 = new ProblemDetail(problemDetail);

  problemDetail1
    .save()
    .then((result) => {
      res.json({ problem: result });
      // console.log(req.user)
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
