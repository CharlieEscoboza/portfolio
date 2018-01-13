const React = require('react');

const SocialFollowItem = ({link, network}) => {

  /**
   * Render SocialFollowItem Component
   *
   */
  return (
    <li className="social-item">
      <a className={`social-follow-${network}`} href={link}>{network}</a>
    </li>
  );
};

module.exports = SocialFollowItem;
