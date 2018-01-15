const React = require('react');
const DefaultLayout = require('./DefaultLayout');
const Homepage = require('./Homepage');


class Base extends React.Component {

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
      <DefaultLayout title={this.props.title} >
        <Homepage data={this.props.data} />
      </DefaultLayout>
    );
  }
}

Base.defaultProps = {
  contentType: 'Homepage'
};

module.exports = Base;
