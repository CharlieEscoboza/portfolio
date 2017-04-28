/**
 * Created by Charlie on 12/26/2016.
 */

import React from 'react';

const Row = ({children}) => {

  /**
   * Render Row Component
   *
   */
  return (
    <div className="row">
      {children}
    </div>
  );
};

export default Row;