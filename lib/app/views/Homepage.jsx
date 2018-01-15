const React = require('react');

const fetch = require('isomorphic-fetch');
const DefaultLayout = require('./DefaultLayout');
const BioSection = require('./components/Sections/BioSection');
const ContactMeSection = require('./components/Sections/ContactMeSection');
const IntroSection = require('./components/Sections/IntroSection');
const Jumper = require('./components/Jumper');
const EducationSection = require('./components/Sections/EducationSection');
const SkillsSection = require('./components/Sections/SkillsSection');
const LaborExperienceSection = require('./components/Sections/LaborExperienceSection');

const SiteHeader = require('./layout/SiteHeader');
const SiteFooter = require('./layout/SiteFooter');


/**
 * Render Homepage Component
 *
 */
class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount(){
    fetch('/info.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({data});
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div id="homepage" className="homepage" >
        <SiteHeader data={data} />
        <IntroSection label={data.bio.label} presentation={data.bio.presentation} sectionId="intro"/>
        <BioSection {...data.bio} sectionLink="#bio" />
        <EducationSection courses={data.education.courses} sectionLink="#education" />
        <SkillsSection skills={data.skills} sectionLink="#skills" />
        <LaborExperienceSection items={data.laborExperience} />
        <ContactMeSection sectionLink="#contact"/>
        <Jumper />
        <SiteFooter />
      </div>
    );
  }
}

Homepage.defaultProps = {
  data: {
    bio: {
      label: '',
      presentation: '',
      photo: {src: '', alt: ''}
    },
    education: {
      courses: []
    },
    skills: [],
    laborExperience: [],
    navigation: []
  }
}

module.exports = Homepage;
