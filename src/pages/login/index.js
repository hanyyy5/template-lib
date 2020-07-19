import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Button, Checkbox } from 'antd';

import "./index.scss";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Login = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const onValuesChange = (changedValues, allValues) => {
      allValues.username && setUserName( allValues.username);
      allValues.password && setPassword( allValues.password);
    }

    useEffect(()=>{
       if(props.clickLogin !== 0) {
        console.log(userName, password);
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.clickLogin]);

    return (
      <Form
        {...layout}
        name="basic"
        onValuesChange={onValuesChange}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

    </Form>
    );

}
 

export default Login;
