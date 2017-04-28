import React from 'react';
import Mosaic from '../Mosaic';
import HobbiesList from '../HobbiesList';
import SectionTitle from '../SectionTitle';
import SocialFollow from '../SocialFollow';

/**
 * Render BioSection Component
 *
 */
const BioSection = ({birth, description, hobbies, name, nationality, sectionLink, social}) => {

  return (
    <div id={sectionLink} className='bio-section section' >
      <SectionTitle title="Bio" disableUrl={true} />
      <div className='container'>
        <div className="content">
          <p>Hello, my name is: {name}</p>
          <p>I'm {nationality}</p>
          <p>My birth day is on: {birth}</p>
          <p>{description}</p>
          <HobbiesList items={hobbies} />
          <p>Want to follow me?</p>
          <SocialFollow items={social} />
        </div>
      </div>
    </div>
  );
};


export default BioSection;
