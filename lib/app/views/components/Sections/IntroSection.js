const React = require('react');
const Intro = require('../Intro');

/**
 * Render IntroSection Component
 *
 */
function IntroSection({label, presentation, sectionId = ''}) {

  return (
    <div id={sectionId} className='intro-section section'>
      <Intro description={label} presentation={presentation} />
    </div>
  );
}

module.exports = IntroSection;
