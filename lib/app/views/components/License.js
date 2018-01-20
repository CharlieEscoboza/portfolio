const React = require('react');


class License extends React.Component {

  /**
   * Render License Component
   *
   */
  render() {
    const year = new Date().getFullYear();

    return <span>Copyright © Charlie Garcia {year}</span>;
  }
}

module.exports = License;
