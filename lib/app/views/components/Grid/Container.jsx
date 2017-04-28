/**
 * Created by Charlie on 12/26/2016.
 */

import React from 'react';


/**
 * Render Container Component
 *
 */
const Container = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;