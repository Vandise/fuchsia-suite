import React from 'react';
import { connect } from 'react-redux';

class PortalPage extends React.Component {

  render() {
    return (
      <div>
        <p>hello world</p>
      </div>
    );
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PortalPage);