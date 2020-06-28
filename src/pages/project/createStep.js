import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Steps, Button, message, Result  } from 'antd';

import ProjectInfoFrom from './projectInfoFrom';
import pageDemo from './images/stars.jpg';
import "./index.scss";

const { Step } = Steps;
const steps = [
    {
      title: '选择项目模板',
    },
    {
      title: '填写项目信息',
    },
    {
      title: '初始化项目',
    },
    {
      title: '项目创建成功',
    },
  ];
class CreateStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
        <div className="step-wrapper">
              <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className="step-content-all">
                   {current === 0 && ( <div className="step-box">
                        <img className="demo-shoot" src={pageDemo} alt=""/>
                   </div>)}
                  
                   {current === 1 && <div className="step-box">
                        <ProjectInfoFrom />
                   </div>}
                   {current === 2 && <div className="step-box">
                         打印创建过程日志
                   </div>}
                   {current === 3 && <div className="step-box">
                        <Result
                            status="success"
                            title="成功创建项目"
                            extra={[
                              <Button type="primary" key="backList" onClick={(e) => this.context.toCreateProject(false)}>
                                返回项目列表 
                              </Button>,
                              <Button key="edit"><Link to='/edit' target="_blank">进入编辑</Link></Button>,
                            ]}
                          />
                   </div>}
              </div>
              <div className="steps-action">
                    {current > 0 && current < steps.length - 1 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                        上一步
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                         下一步
                        </Button>
                    )}
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

CreateStep.contextTypes = {
  toCreateProject: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep);
