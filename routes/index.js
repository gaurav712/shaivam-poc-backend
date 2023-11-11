var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/latest-version", (req, res) => {
  res.send({ version: "0.1" });
});

router.get("/api/latest-db", (req, res) => {
  const filePath = path.join(__dirname, "../latest.json"); // Adjust the file path accordingly
  res.sendFile(filePath, (err) => {
    if (err) {
      // Handle errors, for example, file not found
      console.log(JSON.stringify(err, null, 2));
      res.status(500).send("Internal Server Error");
    }
  });
});

module.exports = router;
