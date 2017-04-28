/**
 * Created by Charlie on 12/3/2016.
 */

import * as _ from 'lodash';
import React from 'react';
import SocialFollowItem from './SocialFollowItem';


const prerenderItems = (social, network) => {
  return social.map((value, key) => {
    return <SocialFollowItem link={value} network={network} key={`${network}-${key}`} />;
  });
};

/**
 * Render SocialFollow Component
 *
 */
const SocialFollow = ({items = {}}) => {

  const socialItems = _.map(items, prerenderItems);

  return (
    <ul className="component-social-follow">
      {socialItems}
    </ul>
  );
};


export default SocialFollow;