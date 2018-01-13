const React = require('react');

const Hobbie = ({name, suffix = ''}) => {

  /**
   * Render Hobbie Component
   *
   */
  return <span>{name}{suffix}</span>;
};

module.exports = Hobbie;
