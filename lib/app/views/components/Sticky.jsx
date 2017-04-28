/**
 * Created by Charlie on 3/4/2017.
 */

import classnames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import { scrollMonitor, isBrowser } from '../../helpers';

const IE_RE = /Windows.*Trident/g;


export default class Sticky extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      top: 0,
      sticky: false
    };
    this._updatePosition = this._updatePosition.bind(this);
    this._isIE = this._isIE.bind(this);
  }


  shouldComponentUpdate(nextProps, nextState){
    return nextState.sticky !== this.state.sticky;
  }


  componentWillMount(){
    if (isBrowser) {
      scrollMonitor(window, this._updatePosition);
    }
  }


  componentDidMount() {
    this._updatePosition();
  }


  _isIE(userAgent) {
    return IE_RE.test(userAgent);
  }


  _updatePosition() {
    const node = this && ReactDOM.findDOMNode(this);
    const initPosition = node.getBoundingClientRect();
    const scrollPosition = this._isIE(window.navigator.userAgent) ? window.pageYOffset : window.scrollY;
    const shouldSticky = scrollPosition > initPosition.top;

    this.setState({
      sticky: shouldSticky
    });
  }


  /**
   * Render Sticky Component
   *
   */
  render() {
    const classes = classnames('component-sticky', {
      frozen: this.state.sticky
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
