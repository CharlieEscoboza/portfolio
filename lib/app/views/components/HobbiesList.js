const React = require('react');
const Hobbie = require('./Hobbie');


const renderHobbie = (length) => {
  return (item, index) => {
    const suffix = index !== (length - 1) && (index === (length - 2) ? ' and ' : ', ');
    return <Hobbie name={item} key={index} suffix={suffix} />;
  };
};

const HobbiesList = ({items}) => {
  /**
   * Render HobbiesList Component
   *
   */
  return (
    <div>
      I really enjoy at: {items.map(renderHobbie(items.length))}
    </div>
  );
};

module.exports = HobbiesList;
