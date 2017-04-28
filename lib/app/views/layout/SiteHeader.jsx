/**
 * Created by Charlie on 11/28/2016.
 */

import React from 'react';
import Navigation from '../components/Navigation';
import Image from '../components/Image';
import Sticky from '../components/Sticky'

/**
 * Render SiteHeader Component
 *
 */
export default class SiteHeader extends React.Component {

  render() {
    const bio = this.props.data.bio;
    const navigation = this.props.data.navigation;

    return (
      <div className="site-header">
        <Sticky>
          <div className="container">
            <Image src={bio.photo.src} alt={bio.photo.alt}/>
            <Navigation items={navigation}/>
          </div>
        </Sticky>
      </div>
    );
  }
}
