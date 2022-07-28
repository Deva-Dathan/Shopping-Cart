var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "IPHONE 13 PRO MAX",
      category: "Mobile",
      description:
        "This is the phone manufactued by APPLE company and it is launched in Sept 2021.",
      image: "https://m.media-amazon.com/images/I/61D84NtVgVL.jpg",
    },
    {
      name: "OPPO F15",
      category: "Mobile",
      description:
        "This is the phone manufactued by OPPO company and it is launched in Sept 2021.",
      image: "https://m.media-amazon.com/images/I/71xrXGLZtXL._SX385_.jpg",
    },
    {
      name: "REALME GT NEO",
      category: "Mobile",
      description:
        "This is the phone manufactued by REALME company and it is launched in Sept 2021.",
      image: "https://image01.realme.net/general/20220429/1651221301056.png",
    },
    {
      name: "ONEPLUS 9 PRO",
      category: "Mobile",
      description:
        "This is the phone manufactued by ONEPLUS company and it is launched in Sept 2021.",
      image: "https://m.media-amazon.com/images/I/71E+AgYDKtL._SL1500_.jpg",
    },
  ];
  res.render("index", { products });
  res.render("index", { title: "Express" });
});

module.exports = router;
