var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");





// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("burgers_controller - get - select all");
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// INSERT INTO burgers (burger_name, devoured, date) VALUES ('South Park Slider', false, '2017-02-01 12:13:14');
router.post("/", function(req, res) {

  var the_burger = "\"the king\"";
  var the_state = "false" ;
  the_burger = "\"the king\"";
  the_burger = "\""+ req.body.burger_name + "\"";
  if (the_burger === "\"\"")
  {
    console.log("no name entered");
    return;
  }
  the_state = "false" ;
  
  console.log("burgers_controller -the_burger: " + the_burger);
  console.log("burgers_controller - the_state: " + the_state);

  burger.insertOne
  ("burger_name", "devoured", 
    the_burger,the_state ,
      function() {
      console.log("burgers_controller - get - insert one");
      res.redirect("/");
  });

});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, 
  function() {
    console.log("burgers_controller - get - update one");
    res.redirect("/");
  });
});


router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    console.log("burgers_controller - get - delete");
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
