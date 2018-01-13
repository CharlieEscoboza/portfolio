const classnames = require('classnames');
const React = require('react');

/**
 * Render Image Component
 *
 */
const Image = function ({className = '', src, alt}) {
  const classes = classnames('component-image', className);

  return <img className={classes} src={src} alt={alt}/>;
};

Image.PropTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};

module.exports = Image;
