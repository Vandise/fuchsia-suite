import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SIDEBAR_KEY = 'SideBar';
const HEADER_KEY = 'Header';

const PortalPage = ({ fuchsiaInterface }) => {
  const SideBar = fuchsiaInterface.ComponentManager.getComponent(SIDEBAR_KEY);
  const Header = fuchsiaInterface.ComponentManager.getComponent(HEADER_KEY);
  return (
    <div>
      <Header />
      <div className='columns'>
        <div className='column is-3'>
          <SideBar />
        </div>
        <div className='column'>
          <p>hello world</p>
        </div>
      </div>
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
