import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlusOutlined, FolderOpenOutlined } from '@ant-design/icons';

import CreateStep from './createStep';
import "./index.scss";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       showCreatePanel: false
    };
  }

  getChildContext = () => ({
     toCreateProject: this.toCreateProject
  })

  toCreateProject = (isShowCreateStep) => {
    this.setState({
      showCreatePanel: isShowCreateStep
    })
  }

  render() {
    const { showCreatePanel } = this.state;
    return (
        <div className="right-panel">
             <div className="project-home" className={ `project-home ${showCreatePanel ? 'hide':''}` }>
                  <div className="title">中后台领域IDE，快速构建企业级中后台前端应用</div>
                  <div className="add-project" onClick={(e) => this.toCreateProject(true)}><PlusOutlined style={{ fontSize: '24px'}} /></div>
                  <div className="open-project"><FolderOpenOutlined style={{ marginRight: '8px' }} />打开项目</div>
             </div>
             {showCreatePanel && <CreateStep /> }
             
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

Project.childContextTypes = {
  toCreateProject: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
