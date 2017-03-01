// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    console.log("burger - select all");
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },


  // The variables cols and vals are arrays.
  insertOne: function(nn,cc,vn,vc , cb) {
    console.log("burger - inserts one");
    orm.insertOne("burgers", nn,cc,vn,vc , function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    console.log("burger - update one");
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    console.log("burger - delete");
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
