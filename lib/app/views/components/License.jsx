/**
 * Created by Charlie on 12/4/2016.
 */

import React from 'react';


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

export default License;
