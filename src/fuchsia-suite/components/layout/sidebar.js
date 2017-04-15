import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const SideBar = ({ fuchsiaInterface }) => {
  return (
    <aside className="menu">
      { fuchsiaInterface.SideBarManager.generateSideBar() }
    </aside>
  );
};

SideBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
