/**
 * Created by Charlie on 12/3/2016.
 */

import React,{Component} from 'react';
import TeamMemberInfo from './TeamMemberInfo.jsx';


class TeamMembersList extends Component {

  constructor(props){
    super(props);
    this._prerenderItems.bind(this);
  }


  _prerenderItems(item, index){
    return <TeamMemberInfo key={index} {...item} />
  }


  /**
   * Render TeamMembersList Component
   *
   */
  render() {
    const items = this.props.items.map(this._prerenderItems);

    return (
      <div className="component-team-member-list">
        {items}
      </div>
    );
  }
}

export default TeamMembersList;