import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SIDEBAR_KEY = 'SideBar';

const PortalPage = ({ fuchsiaInterface }) => {
  console.log(fuchsiaInterface.ComponentManager.pages.test1);
  console.log(fuchsiaInterface.ComponentManager.pages.test2);
  const SideBar = fuchsiaInterface.ComponentManager.getComponent(SIDEBAR_KEY);
  return (
    <div>
      <SideBar />
      <p>hello world</p>
    </div>
  );
};

PortalPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PortalPage);
