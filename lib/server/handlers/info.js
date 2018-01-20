const infoModel = require('../models/info');

const get = (req, resp) =>
  resp.send(infoModel.getData());

module.exports.get = get;
