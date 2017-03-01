// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}





// Object for all our SQL statement functions.
var orm = { // was all
  selectAll: function(tableInput, cb) {
    console.log("orm - select all");
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  // was create
  // INSERT INTO Customers (CustomerName, City, Country) VALUES ('Cardinal', 'Stavanger', 'Norway');
  // INSERT INTO burgers (burger_name, devoured, date) VALUES ('South Park Slider', false, '2017-02-01 12:13:14');
  insertOne: function(table, bh_name, bh_status, b_name, b_status, cb) {
    console.log("orm - insert one");
    var queryString = "";
    queryString = "INSERT INTO " + table + " (" + bh_name +", " + bh_status + ") ";
    queryString += "VALUES (" + b_name + ", " + b_status + ");";

    console.log("b_name: " + b_name);
    console.log("b_status: " + b_status);
    console.log("file orm line 64");
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // An example of objColVals would be {name: Gut Buster, devoured: true}
  // was update
  updateOne: function(table, objColVals, condition, cb) {
    console.log("orm - update one");
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },




  // delete is not part of the homework 14
  delete: function(table, condition, cb) {
    console.log("orm - delete");
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};





// Export the orm object for the model (burger.js). // was cat.js
module.exports = orm;
