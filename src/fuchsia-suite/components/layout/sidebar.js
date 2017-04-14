import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const SideBar = ({ fuchsiaInterface }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
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
