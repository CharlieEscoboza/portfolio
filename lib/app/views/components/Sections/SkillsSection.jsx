/**
 * Created by Charlie on 12/3/2016.
 */

import * as _ from 'lodash';
import React from 'react';
import SectionTitle from '../SectionTitle';
import Mosaic from '../Mosaic';


const prerenderContent = (item) => {
  const content = <p className="skill-level">{item.level}</p>;

  return _.assign({}, item, {content: content});
};


/**
 * Render TeamSection Component
 *
 */
const SkillsSection = ({skills, sectionLink}) => {
  const items = skills.map(prerenderContent);

  return (
    <div id={sectionLink} className="team-member-section section">
      <SectionTitle disableUrl={true} title="Skills" />
      <Mosaic items={items} />
    </div>
  );
};

export default SkillsSection;