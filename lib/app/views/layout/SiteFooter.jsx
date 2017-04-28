/**
 * Created by Charlie on 12/4/2016.
 */

import React from 'react';
import License from '../components/License';


class SiteFooter extends React.Component {

  /**
   * Render SiteFooter Component
   *
   */
  render() {
    return (
      <div className="site-footer">
        <License />
      </div>
    );
  }
}

export default SiteFooter;