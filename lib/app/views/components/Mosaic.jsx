/**
 * Created by Charlie on 12/3/2016.
 */

import React from 'react';
import EducationalMosaicItem from './EducationalMosaicItem';
import MosaicItem from './MosaicItem';


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


export default Mosaic;
