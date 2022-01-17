'use strict';

module.exports = app => {
  let myJson = require('./controller');

  app.route('/').get(myJson.index);
  app.route('/show').get(myJson.getData);
  app.route('/show/:id').get(myJson.getById);
  app.route('/').post(myJson.postData);
  app.route('/:id').patch(myJson.patchData);
  app.route('/:id').delete(myJson.deleteData);
}