const React = require('react');
const Image = require('../Image');
const SectionTitle = require('../SectionTitle');
const Mosaic = require('../Mosaic');


const getContent = (item) => {
  const {logo} = item;

  return (
    <div>
      <Image alt={logo.alt} src={logo.src} />
      <p className="company-name">
        <strong>
          {item.companyName}
        </strong>
      </p>
      <p className="company-description">{item.description}</p>
      <p className="position">
        <strong>Role: </strong>{`${item.role}`}
      </p>
      <p className="position-description">
        <strong>Role description: </strong> {`${item.roleDescription}`}
      </p>
      <p className="start-date">
        <strong>Start date: </strong>{`${item.startDate}`}
      </p>
      <p className="end-date">
        <strong>End date: </strong>{`${item.endDate || 'Current'}`}
      </p>
    </div>
  );
};


const prerenderItems = (item) => {
  const content = getContent(item);
  return Object.assign({}, item, {content: content});
};


/**
 * Render TechnologiesSection Component
 *
 */
const LaborExperienceSection = ({items = []}) => {
  const labors = items.map(prerenderItems);

  return (
    <div className="labor-experience-section section">
      <SectionTitle disableUrl={true} title="Labor Experience"/>
      <Mosaic items={labors} />
    </div>
  );
};

module.exports = LaborExperienceSection;
