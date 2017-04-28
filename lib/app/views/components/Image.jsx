/**
 * Created by Charlie on 12/3/2016.
 */

import classnames from 'classnames';
import React from 'react';

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

export default Image;
