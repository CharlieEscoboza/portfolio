/**
 * Created by Charlie on 11/27/2016.
 */

import React from 'react';

class NavigationItem extends React.Component {

  constructor(props){
    super(props);
    this._moveScroll.bind(this);
  }


  _moveScroll(evt){
    evt.preventDefault();
    const node = document.getElementById(evt.target.getAttribute('href'));
    const sectionTop = node ? node.getBoundingClientRect().top : 0;

    if (node && (Math.floor(sectionTop) - 100)) {
      console.log('Node location', sectionTop);
      console.log('window location', window.innerHeight);

      window.scrollTo(0, sectionTop - 100);
    }
  }

  /**
   * Render NavigationItem Component
   *
   */
  render() {
    return (
      <li className="navigation-item">
        <a className="navigation-link" href={this.props.item.link} onClick={this._moveScroll} >
          {this.props.item.label}
        </a>
      </li>
    );
  }
}

export default NavigationItem;
