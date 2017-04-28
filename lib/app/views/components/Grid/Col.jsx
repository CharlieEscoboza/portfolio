/**
 * Created by Charlie on 12/26/2016.
 */

import * as _ from 'lodash';
import classnames from 'classnames';
import React from 'react';

class Col extends React.Component {

  constructor(props){
    super(props);
    this._getClassNames = this._getClassNames.bind(this);
    this._parseColClasses = this._parseColClasses.bind(this);
  }


  /**
   * Parse col style props
   *
   * @param {string} prop - component prop.
   * @param {number} value - prop value.
   * @returns {string} - col style classes
   * @private
   */
  _parseColClasses(value, prop){
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    if (_.includes(sizes, prop) && _.isNumber(value)){
      return 'col-' + prop + '-' + value;
    }
  }


  /**
   * Get col style classes
   *
   * @returns {string} - col style classes
   * @private
   */
  _getClassNames(){
    const classes = _.map(this.props, this._parseColClasses);
    return classes.join(' ').trim();
  }


  /**
   * Render Col Component
   *
   */
  render() {
    const classes = classnames('col', this._getClassNames());

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default Col;