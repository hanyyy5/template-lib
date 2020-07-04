import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddPage from './addPage';
import "./index.scss";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <div className="edit-page">
             <div className="left-file-tree">
                 <div className="first-module">
                      
                 </div>
                 <div className="second-module">
                      
                 </div>
             </div>
             <div className="right-content">
                  <div className="tab">
                       
                  </div>
                  <div className="tab-content">
                       <AddPage /> 
                  </div>
             </div>
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
