/**
 * Created by Charlie on 12/3/2016.
 */

import React,{Component} from 'react';
import Image from './Image.jsx';
import SocialFollow from './SocialFollow.jsx';


class TeamMemberInfo extends Component {

  /**
   * Render TeamMemberInfo Component
   *
   */
  render() {
    return (
      <div className="component-team-member-info">
        <Image {...this.props.image} />
        {this.props.name && <h4 className="name">{this.props.name}</h4>}
        {this.props.memberTitle && <p className="member-title">{this.props.memberTitle}</p>}
        <SocialFollow socialLinks={this.props.socialLinks} />
      </div>
    );
  }
}

export default TeamMemberInfo;