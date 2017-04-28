/**
 * Created by Charlie on 11/26/2016.
 */

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const BasePage = require('../../app/views/pages/Base.jsx').default;

const homePageModel = require('../models/homepage');
const homePageController = require('../controllers/homepage').init(homePageModel);


const get = (req, resp) => {
  const ui = ReactDOMServer.renderToStaticMarkup(homePageController.prerender(BasePage, 'Homepage'));
  resp.render('index.hbs', {title: 'My portafolio webpage', ui: ui});
};

module.exports.get = get;