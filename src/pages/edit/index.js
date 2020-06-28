import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="edit-page">
             这是编辑页面
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
