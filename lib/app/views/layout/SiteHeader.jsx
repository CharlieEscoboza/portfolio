/**
 * Created by Charlie on 11/28/2016.
 */

const React = require('react');
const Navigation = require('../components/Navigation');
const Image = require('../components/Image');
const Sticky = require('../components/Sticky');

/**
 * Render SiteHeader Component
 *
 */
class SiteHeader extends React.Component {

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

module.exports = SiteHeader;
