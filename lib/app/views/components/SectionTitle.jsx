/**
 * Created by Charlie on 12/3/2016.
 */

import React,{Component} from 'react';


class SectionTitle extends Component {

  constructor(props){
    super(props);
  }


  /**
   * Render SectionTitle Component
   *
   */
  render() {
    let title = this.props.title;

    if (!this.props.disableUrl) {
      title = <a href={this.props.sectionLink}>{title}</a>;
    }

    return (
      <h2 className="component-section-title">
        {title}
      </h2>
    );
  }
}

/**
 * Default props
 * @type {{disableUrl: boolean}}
 */
SectionTitle.defaultProps = {
  disableUrl: true,
  title: ''
};

export default SectionTitle;