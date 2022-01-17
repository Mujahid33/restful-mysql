'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = (req, res) => {
  response.ok("REST API running", res);
}

// get data
exports.getData = (req, res) => {
  connection.query("SELECT * FROM user", (err, result, fields) => {
    if (err) {
      response.failed("Failed to get data", res);
    }
    else {
      response.ok(result, res);
    }
  })
}

// get data by id
exports.getById = (req, res) => {
  let id = req.params.id;
  connection.query("SELECT * FROM user WHERE id = ?", [id], (err, result, fields) => {
    if (err) {
      response.failed("Failed to get data", res);
    }
    else {
      response.ok(result, res);
    }
  })
}

// post new data
exports.postData = (req, res) => {
  let name = req.body.name;

  connection.query("INSERT INTO user(name) VALUES(?)", [name], (err, result, fields) => {
    if (err) {
      response.failed("Failed to insert data", res);
    }
    else {
      response.ok(result, res, "Data Inserted successfully");
    }
  })
}

// patch data
exports.patchData = (req, res) => {
  let id = req.params.id;
  let name = req.body.name;

  connection.query("UPDATE user SET name = ? WHERE id = ?", [name, id], (err, result, fields) => {
    if (err) {
      response.failed("Failed to update data", res);
    }
    else {
      response.ok(result, res, "Data updated successfully");
    }
  })
}

// delete data
exports.deleteData = (req, res) => {
  const { id } = req.params;

  connection.query("DELETE FROM user WHERE id = ?", [id], (err, result, fields) => {
    if (err) {
      response.failed("Failed to delete data", res);
    }
    else {
      response.ok(result, res, "Data deleted successfully");
    }
  })
}