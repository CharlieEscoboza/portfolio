const classnames = require('classnames');
const React = require('react');
const propTypes = require('prop-types');

/**
 * Render Image Component
 *
 */
const Image = function ({className = '', src, alt}) {
  const classes = classnames('component-image', className);

  return <img className={classes} src={src} alt={alt}/>;
};

module.exports = Image;
