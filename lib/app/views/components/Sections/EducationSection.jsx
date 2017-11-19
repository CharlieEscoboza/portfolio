/**
 * Created by Charlie on 12/3/2016.
 */

import * as _ from 'lodash';
import classnames from 'classnames';
import React from 'react';
import Mosaic from '../Mosaic.jsx';
import SectionTitle from '../SectionTitle.jsx';


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this._openInfoSection = this._openInfoSection.bind(this);
  }

  _openInfoSection() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { item } = this.props;
    const status = item.endDate ? 'Finish' : 'In Progress';

    return (
      <div className={classnames("info", {'open': this.state.open})}>
        <button className="collapsible-button" onClick={this._openInfoSection}>Details</button>
        <p className="start-date">{`Start date: ${item.startDate}`}</p>
        <p className="start-date">{`End date: ${item.endDate}`}</p>
        <p className="status">{`Status: ${status}`}</p>
      </div>
    );
  }
};


const prerenderItem = (item) => {
  return _.assign({}, item, {content: <Content item={item} />});
};


/**
 * Render EducationSection Component
 *
 */
const EducationSection = ({courses, sectionLink}) => {
  const items = courses.map(prerenderItem);

  return (
    <div id={sectionLink} className="educational-section section" >
      <SectionTitle disableUrl={true} title="Education" />
      <Mosaic items={items} theme="education" />
    </div>
  );
};

export default EducationSection;
