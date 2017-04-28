/**
 * Created by Charlie on 2/27/2017.
 */

import React from 'react';
import Image from './Image.jsx';

/**
 * Render Intro Component
 *
 */
export default function Intro({description = '', presentation = ''}) {

  return (
    <div className="intro-component">
      <h2 className="presentation">{presentation}</h2>
      <h1 className="description">{description}</h1>
    </div>
  );
}

module.exports = Intro;