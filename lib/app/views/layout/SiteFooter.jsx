/**
 * Created by Charlie on 12/4/2016.
 */

const React = require('react');
const License = require('../components/License');


class SiteFooter extends React.Component {

  /**
   * Render SiteFooter Component
   *
   */
  render() {
    return (
      <div className="site-footer">
        <License />
      </div>
    );
  }
}

module.exports = SiteFooter;
