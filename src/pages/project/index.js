import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DataSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    
    return (
        <div className="right-panel">
            project
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
     
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSource);
