import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FuchsiaSuite = ({ children }) => {
  return (
    <div id="fuchsia-suite-container">
      { children }
    </div>
  );
};

FuchsiaSuite.propTypes = {
  children: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FuchsiaSuite);
