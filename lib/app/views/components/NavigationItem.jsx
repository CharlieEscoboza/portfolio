/**
 * Created by Charlie on 11/27/2016.
 */

import React from 'react';

class NavigationItem extends React.Component {

  constructor(props){
    super(props);
    // this._moveScroll.bind(this);
  }


  // _moveScroll(){
  //   const node = document.getElementById(this.props.item.link);
  //
  //   if (node) {
  //     const sectionTop = node.getBoundingClientRect().top;
  //     window.scrollTo(0, sectionTop);
  //   }
  // }

  /**
   * Render NavigationItem Component
   *
   */
  render() {
    return (
      <li className="navigation-item">
        <a className="navigation-link" href={this.props.item.link} >
          {this.props.item.label}
        </a>
      </li>
    );
  }
}

export default NavigationItem;