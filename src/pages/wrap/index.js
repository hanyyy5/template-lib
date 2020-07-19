import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import LeftNav from '../wrap/leftNav/index';
import LoginBox from '../login';
import {Layout, Modal } from 'antd';
import  ROUTES  from "../../config/routes.config";
import _ from "lodash";
import "./index.scss";

import { createGlobalStyle } from 'styled-components';

const routes = _.clone(ROUTES);

const GlobalStyle = createGlobalStyle`
  .ace-scroll-bar {
    ::-webkit-scrollbar { width: 8px; height: 8px; background-color: transparent; }
    ::-webkit-scrollbar-track-piece { background-color: transparent; }
    ::-webkit-scrollbar-thumb { border-radius: 4px; background-color: rgba(45, 47, 51, 0.2); }
    ::-webkit-scrollbar-thumb:hover { background-color: rgba(45, 47, 51, 0.4); }
    ::-webkit-scrollbar-thumb:active { background-color: rgba(45, 47, 51, 0.4); }
    ::-webkit-scrollbar-track { background-color: transparent; }
    ::-webkit-scrollbar-corner { background-color: transparent; }
  }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    .ant-layout {
        height: 100%;
    }
    .logo {
        height: 64px;
        line-height: 64px;
        color: #fff;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }
    
    .top-header {
        background: #fff;
        height: 64px;
        line-height: 64px;
    }
    .main-content-outer {
       
    }
`;

class WrapApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '我的项目',
      showLoginBox: false,
      clickLogin: 0,
    }
  }
  updateActive = (key, keyPath) => {
    if(keyPath.length > 1) {
        let parentIndex = _.findIndex(routes, route => route.key === keyPath[1]);
        let index = _.findIndex(routes[parentIndex].children, subRoute => subRoute.key === key)
        this.setState({current: routes[parentIndex].children[index]['text']});
    }else{
        let index = _.findIndex(routes, route => route.key === key);
        this.setState({current: routes[index]['text']});
    }
  
  }

  openLogin = () => {
    this.setState({
      showLoginBox: true
    })
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      showLoginBox: false
    })
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      clickLogin: this.state.clickLogin + 1
    })
  }

  render() {
    const { Content, Sider } = Layout;
    const { showLoginBox, clickLogin } = this.state;
    return (
      <Wrapper>
        <Modal
          title="用户登录"
          visible={showLoginBox}
          closable={true}
          okText="登录"
          cancelText="取消"
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
         <LoginBox clickLogin={clickLogin}/>
        </Modal>
        <GlobalStyle />
              <Switch>
                <Layout>
                    {/* 左侧导航 */}
                    <Sider>
                        <div className="logo">物料库</div>
                        <LeftNav updateActive={this.updateActive}/>
                    </Sider>
                    {/* 右侧内容 */}
                    <Layout>
                        <div className="login-line" onClick={this.openLogin}>登录</div>
                        <Content style={{ padding: '0 50px' }}>
                            <div className="main-content-outer">
                                    <Route exact path="/" render={() => <Redirect to="/project" push />}/>
                                    {   
                                        routes.map((route) => 
                                            !route.children ?
                                            <Route exact key={route.key} path={route.link} component={route.component}/>
                                            :
                                            route.children.map((subRoute) => 
                                                <Route exact key={subRoute.key} path={subRoute.link} component={subRoute.component}/>
                                            )
                                        )
                                    }
                            </div>
                        </Content>
                    </Layout>
                  
                </Layout>
            </Switch>
            
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapApp);