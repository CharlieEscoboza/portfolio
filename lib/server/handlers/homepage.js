const get = (req, resp) =>
  resp.render('Homepage', { title: 'My portafolio webpage' });

module.exports.get = get;
