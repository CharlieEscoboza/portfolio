const { info } = require('../models');

const get = (req, resp) =>
  resp.render('Base', { title: 'My portafolio webpage', data: info.getData() });

module.exports.get = get;
