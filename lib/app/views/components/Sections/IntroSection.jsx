/**
 * Created by Charlie on 12/2/2016.
 */

import React from 'react';
import Intro from '../Intro.jsx';

/**
 * Render IntroSection Component
 *
 */
export default function IntroSection({label, presentation, sectionId = ''}) {

  return (
    <div id={sectionId} className='intro-section section'>
      <Intro description={label} presentation={presentation} />
    </div>
  );
}
