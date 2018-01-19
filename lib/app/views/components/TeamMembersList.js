const React = require('react');
const TeamMemberInfo = require('./TeamMemberInfo');


class TeamMembersList extends React.Component {

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

module.exports = TeamMembersList;
