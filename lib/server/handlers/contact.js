/**
 * Created by Charlie on 3/12/2017.
 */

const emailHelper = require('../helpers/email');

/**
 * Post method handler
 *
 * @param {Object} req - page request.
 * @param {Object} resp - server response.
 */
const post = (req, resp) => {
  const from = {fromName: req.body.name, fromEmail: req.body.email};
  emailHelper.sendEmail(req.body.message, from);
  resp.status(200).json({ message: 'ok' });
};


module.exports.post = post;
