/**
 * Created by Charlie on 2/13/2017.
 */

const React = require('react');


const homePageController = {
  init: function (model) {
    this.model = model;
    return this;
  },
  prerender: function (view, contentType) {
    var data = this.model.getData();
    return React.createElement(view, {data: data, contentType: contentType});
  }
};

module.exports = homePageController;
