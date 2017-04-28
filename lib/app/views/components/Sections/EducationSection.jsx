/**
 * Created by Charlie on 12/3/2016.
 */

import * as _ from 'lodash';
import React from 'react';
import Mosaic from '../Mosaic.jsx';
import SectionTitle from '../SectionTitle.jsx';


const getContent = (item, status) => {
  return (
    <div className="info">
      <p className="start-date">{`Start date: ${item.startDate}`}</p>
      <p className="start-date">{`End date: ${item.endDate}`}</p>
      <p className="status">{status}</p>
    </div>
  );
};


const prerenderItem = (item) => {
  const status = item.endDate ? 'Finish' : 'In Progress';

  return _.assign({}, item, {content: getContent(item, status)});
};


/**
 * Render EducationSection Component
 *
 */
const EducationSection = ({courses, sectionLink}) => {
  const items = courses.map(prerenderItem);

  return (
    <div id={sectionLink} className="testimonial-section section" >
      <SectionTitle disableUrl={true} title="Education" />
      <Mosaic items={items} theme="education" />
    </div>
  );
};

export default EducationSection;