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

Image.PropTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired
};

module.exports = Image;
