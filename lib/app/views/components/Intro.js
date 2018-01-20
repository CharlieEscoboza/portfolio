const React = require('react');
const Image = require('./Image');

/**
 * Render Intro Component
 *
 */
function Intro({description = '', presentation = ''}) {

  return (
    <div className="intro-component">
      <h2 className="presentation">{presentation}</h2>
      <h1 className="description">{description}</h1>
    </div>
  );
}

module.exports = Intro;
