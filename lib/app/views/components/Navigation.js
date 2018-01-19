const React = require('react');
const NavigationItem = require('./NavigationItem');


class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this._renderItems.bind(this);
  }


  /**
   * Rennder Navigation items
   *
   * @returns {Object} React element
   */
  _renderItems(item, index) {
    return <NavigationItem item={item} key={index}/>
  }

  /**
   * Render Navigation Component
   *
   */
  render() {
    const items = this.props.items.map(this._renderItems);

    return (
      <ul className='component-navigation'>
        {items}
      </ul>
    );
  }
}

Navigation.defaultProps = {
  items: []
};

module.exports = Navigation;
