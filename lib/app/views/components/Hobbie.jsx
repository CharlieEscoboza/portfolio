/**
 * Created by Charlie on 3/8/2017.
 */

import React from 'react';

const Hobbie = ({name, suffix = ''}) => {

  /**
   * Render Hobbie Component
   *
   */
  return <span>{name}{suffix}</span>;
};

export default Hobbie;