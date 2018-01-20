const React = require('react');

class Logo extends React.Component {

  constructor(props) {
    super(props);
    this._getLogoImage.bind(this);
  }


  /**
   * Get Logo image
   *
   * @returns {Object} React element
   */
  _getLogoImage() {
    return <img src={this.props.image.src} alt={this.props.image.alt}/>;
  }

  /**
   * Render Logo Component
   *
   */
  render() {
    const image = this._getLogoImage();

    if (this.props.disableUrl) {
      return image;
    }

    return (
      <a className='component-logo' href={this.props.url}>
        {image}
      </a>
    );
  }
}

Logo.defaultProps = {
  disableUrl: false,
  image: {
    src: 'http://www.intellisysdcorp.com/wp-content/themes/Intellisys/img/logo-header.png',
    alt: 'Intellisys D Corp'
  },
  url: '/'
};

module.exports = Logo;
