/**
 * Created by Charlie on 11/28/2016.
 */

import React,{Component} from 'react';
import SiteHeader from '../layout/SiteHeader.jsx';
import SiteFooter from '../layout/SiteFooter.jsx';
import Homepage from './Homepage.jsx';


class Base extends Component {

  constructor(props){
    super(props);
    this._getPage.bind(this);
  }

  _getPage(){
    return <Homepage data={this.props.data}/>;
  }

  /**
   * Render Base Component
   *
   */
  render() {

    return (
      <div>
        <SiteHeader data={this.props.data}/>
        {this._getPage()}
        <SiteFooter />
      </div>
    );
  }
}

Base.defaultProps = {
  contentType: 'Homepage'
};

export default Base;