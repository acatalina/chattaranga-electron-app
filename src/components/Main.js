const React = require('react');
const PropTypes = require('prop-types');

const Main = (props) => {
  return (
    <div>
      <p>Main</p>
      {props.children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

module.exports = Main;