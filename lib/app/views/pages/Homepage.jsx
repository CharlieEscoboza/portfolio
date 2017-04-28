/**
 * Created by Charlie on 11/27/2016.
 */

import React from 'react';

import BioSection from '../components/Sections/BioSection';
import ContactMeSection from '../components/Sections/ContactMeSection';
import IntroSection from '../components/Sections/IntroSection';
import Jumper from '../components/Jumper';
import EducationSection from '../components/Sections/EducationSection';
import SkillsSection from '../components/Sections/SkillsSection';
import LaborExperienceSection from '../components/Sections/LaborExperienceSection';


/**
 * Render Homepage Component
 *
 */
class Homepage extends React.Component {

  render() {
    const data = this.props.data;

    return (
      <div className="homepage" >
        <IntroSection label={data.bio.label} presentation={data.bio.presentation} sectionId="intro"/>
        <BioSection {...data.bio} sectionLink="#bio" />
        <EducationSection courses={data.education.courses} sectionLink="#education" />
        <SkillsSection skills={data.skills} sectionLink="#skills" />
        <LaborExperienceSection items={data.laborExperience} />
        <ContactMeSection sectionLink="#contact"/>
        <Jumper />
      </div>
    );
  }
}

export default Homepage;