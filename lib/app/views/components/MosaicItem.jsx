/**
 * Created by Charlie on 12/3/2016.
 */

import React from 'react';
import Image from './Image';

/**
 * Get image content
 *
 * @param {Object} image - image data object
 * @param {string} url - image link url
 * @returns {Object} React element
 * @private
 */
const getImageContent = (image, url) => {
  const imageContent = <Image className='logo' src={image.src} alt={image.alt} />;

  if (url) {
    return (
      <a target='_blank' href={url} className='logo-link'>
        {imageContent}
      </a>
    );
  }

  return imageContent;
};


/**
 * Render MosaicItem Component
 *
 */
const MosaicItem = ({content, dek = '', hed = '', image = {}, subHed = '', url = ''}) => {
  const hasContent = content || dek || hed || subHed;

  return (
    <div className='component-mosaic-item'>
      {getImageContent(image, url)}
      {hasContent &&
      <div className='content'>
        {hed && <h4 className='hed'>{hed}</h4>}
        {subHed && <h4 className='sub-hed'>{subHed}</h4>}
        {dek && <p className='dek'>{dek}</p>}
        {React.isValidElement(content) && content}
      </div>
      }
    </div>
  );
};

export default MosaicItem;
