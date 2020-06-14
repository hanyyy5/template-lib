import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Steps, Button, message } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
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
                   
              </div>
              <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                        下一步
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        完成
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                        上一步
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep);
