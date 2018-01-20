const React = require('react');
const EducationalMosaicItem = require('./EducationalMosaicItem');
const MosaicItem = require('./MosaicItem');


/**
 * Pre-render Items
 *
 * @param {string} theme - component theme.
 * @returns {Function} Pre-render function.
 * @private
 */
const prerenderItems = (theme) => {
  /**
   *
   * @param {Object} item - item data object
   * @param {number} index - item index
   * @returns {Object} React element
   * @private
   */
  return (item, index) => {
    const isEducationalTheme = theme === 'education';
    return isEducationalTheme ?
      <EducationalMosaicItem  key={index} {...item} /> :
      <MosaicItem key={index} {...item} />;
  };
};


/**
 * Render Mosaic Component
 *
 */
const Mosaic = ({className = '', items = [], theme = 'default'}) => {
  return (
    <div className={`component-mosaic ${className}`} >
      {items.map(prerenderItems(theme))}
    </div>
  );
};


module.exports = Mosaic;
