/**
 * Created by Charlie on 12/3/2016.
 */

import * as _ from 'lodash';
import React from 'react';
import Image from '../Image';
import SectionTitle from '../SectionTitle';
import Mosaic from '../Mosaic';


const getContent = (item) => {
  const {logo} = item;

  return (
    <div>
      <Image alt={logo.alt} src={logo.src} />
      <p className="company-name">{item.companyName}</p>
      <p className="company-description">{item.description}</p>
      <p className="position">{item.position}</p>
      <p className="position-description">{item.positionDescription}</p>
      <p className="start-date">{`Start date: ${item.startDate}`}</p>
      <p className="end-date">{`End date: ${item.endDate || 'Current'}`}</p>
    </div>
  );
};


const prerenderItems = (item) => {
  const content = getContent(item);
  return _.assign({}, item, {content: content});
};


/**
 * Render TechnologiesSection Component
 *
 */
const LaborExperienceSection = ({items = []}) => {
  const labors = items.map(prerenderItems);

  return (
    <div className="labor-experience-section section">
      <SectionTitle disableUrl={true} title="Labor Experience"/>
      <Mosaic items={labors} />
    </div>
  );
};

export default LaborExperienceSection;