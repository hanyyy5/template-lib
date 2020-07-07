import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "./index.scss";

const Login = (props) => {
 
    return (
        <div className="login-box">
             登录框
        </div>
    );

}
 

const mapStateToProps = state => {
  return {
  
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      
    },
    dispatch
);

Login.childContextTypes = {
  toCreateProject: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
