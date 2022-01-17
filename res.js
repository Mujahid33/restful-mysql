'use strict';

exports.ok = (values, res, message = "Query success") => {
  let data = {
    'status': 200,
    'values': values,
    'message': message
  };

  res.json(data);
  res.end();
}

exports.failed = (values, res) => {
  let data = {
    'status': 400,
    'values': values
  };

  res.json(data);
  res.end();
}