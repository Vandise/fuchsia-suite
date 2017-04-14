import React from 'react';
import { connect } from 'react-redux';

class PortalPage extends React.Component {

  render() {
    console.log(this.props.fuchsiaInterface.ComponentManager.pages["test1"]);
    return (
      <div>
        <p>hello world</p>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    fuchsiaInterface: state.configReducer.fuchsiaInterface,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PortalPage);