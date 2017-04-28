/**
 * Created by Charlie on 11/27/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import BasePage from '../../app/views/pages/Base.jsx';
import homePageModel from '../../server/models/homepage'
import homePageController from '../../server/controllers/homepage'

require('../styles/index.scss');

const Controller = homePageController.init(homePageModel);
const View = Controller.prerender(BasePage, 'Homepage');
ReactDOM.render(View, document.getElementById('react-app'));

if (module.hot) {
  module.hot.accept();
}
