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


/**
 * Render Homepage Component
 *
 */
class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    fetch('/info').then(data => this.setState({data}));
  }

  render() {
    const { data } = this.props;

    return (
      <DefaultLayout title={this.props.title}>
        <div className="homepage" >
          <IntroSection label={data.bio.label} presentation={data.bio.presentation} sectionId="intro"/>
          <BioSection {...data.bio} sectionLink="#bio" />
          <EducationSection courses={data.education.courses} sectionLink="#education" />
          <SkillsSection skills={data.skills} sectionLink="#skills" />
          <LaborExperienceSection items={data.laborExperience} />
          <ContactMeSection sectionLink="#contact"/>
          <Jumper />
        </div>
      </DefaultLayout>
    );
  }
}

Homepage.defaultProps = {
  title: 'Homepage',
  data: {
    bio: {
      label: '',
      presentation: ''
    },
    education: {
      courses: []
    },
    skills: [],
    laborExperience: []
  }
}

module.exports = Homepage;
