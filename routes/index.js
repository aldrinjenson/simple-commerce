require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
var express = require("express");
const supabase = createClient(process.env.DB_URL, process.env.PUBLIC_KEY);

var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("signin");
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.get("/products", async function (req, res) {
  const { data: products, error } = await supabase.from("products").select();
  if (error) {
    console.log("Error in getting data: " + error);
    return res.send("server error");
  }
  res.render("products", { products });
});

module.exports = router;
