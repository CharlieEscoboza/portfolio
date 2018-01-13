const React = require('react');
const Image = require('./Image');


/**
 * Render EducationalMosaicItem Component
 *
 */
const EducationalMosaicItem = ({institution = {}, content, course = ''}) => {
  const { logo, name } = institution;

  return (
    <div className='component-educational-mosaic-item'>
      <div className="main-content">
        <Image className="logo" alt={logo.alt} src={logo.src} />
        <p className="intitution-name">{name}</p>
        <p className="course">{`Course: ${course}`}</p>
      </div>
      {content}
    </div>
  );
};

module.exports = EducationalMosaicItem;
