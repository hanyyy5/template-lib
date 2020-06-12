import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlusOutlined } from '@ant-design/icons';
import "./index.scss";

class DataSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    
    return (
        <div className="right-panel">
             <div className="title">中后台领域IDE，快速构建企业级中后台前端应用</div>
             <div className="add-project"><PlusOutlined style={{ fontSize: '24px'}} /></div>
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
