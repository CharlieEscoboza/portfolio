const { info } = require('../models');

const get = (req, resp) =>
  resp.render('Homepage', { title: 'My portafolio webpage', data: info.getData() });

module.exports.get = get;
