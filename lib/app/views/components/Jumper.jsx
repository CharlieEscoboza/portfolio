import React from 'react';
import { scrollWindow } from '../../helpers/window';


class Jumper extends React.Component {

  constructor(props){
    super(props);
    this._handleJump = this._handleJump.bind(this);
  }


  _handleJump() {
    const sectionSelector = this.props.nextSection;
    const node = document.querySelector(sectionSelector);

    if (!node) {
      console.warn('There is no node to move');
      return;
    }

    const nodeTopPosition = node.getBoundingClientRect().top;
    scrollWindow(0, nodeTopPosition);
  }


  /**
   * Render Jumper Component
   *
   */
  render() {
    return (
      <div className="componnet-jumper" onClick={this._handleJump}>
        <span className="arrow" />
      </div>
    );
  }
}

Jumper.defaultProps = {
 nextSection: ''
};


export default Jumper;
