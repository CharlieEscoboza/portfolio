const React = require('react');
const Image = require('./Image');
const SocialFollow = require('./SocialFollow');


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

module.exports = TeamMemberInfo;
