const _ = require('lodash');
const React = require('react');
const SocialFollowItem = require('./SocialFollowItem');


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


module.exports = SocialFollow;
