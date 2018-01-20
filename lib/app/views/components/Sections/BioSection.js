const React = require('react');
const Mosaic = require('../Mosaic');
const HobbiesList = require('../HobbiesList');
const SectionTitle = require('../SectionTitle');
const SocialFollow = require('../SocialFollow');

/**
 * Render BioSection Component
 *
 */
const BioSection = ({
  birth = '',
  description = '',
  hobbies = [],
  name = '',
  nationality = '',
  sectionLink = '',
  social = ''}) => (
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


module.exports = BioSection;
