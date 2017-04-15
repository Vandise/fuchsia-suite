import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const marginStyle = {
  marginRight: "8px",
};

// eslint-disable-next-line no-unused-vars
const Header = ({ fuchsiaInterface }) => {
  console.log(fuchsiaInterface.HeaderManager.generateHeader());
  return (
    <nav className="nav has-shadow">
      { fuchsiaInterface.HeaderManager.generateHeader() }
    </nav>
  );
};

Header.propTypes = {
  fuchsiaInterface: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    fuchsiaInterface: state.configReducer.fuchsiaInterface,
  };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
