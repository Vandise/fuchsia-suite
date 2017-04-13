import React from 'react';
import { connect } from 'react-redux';

class FuchsiaSuite extends React.Component {

  render() {
    return (
      <div id="fuchsia-suite-container">
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FuchsiaSuite);