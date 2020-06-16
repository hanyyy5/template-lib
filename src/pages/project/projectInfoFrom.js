import React, { useState } from 'react';
import { Form, Input } from 'antd';

const projectInfoForm = () => {
  const [form] = Form.useForm();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onFormLayoutChange = () => {
    
  };

  return (
    <div>
      <Form
        layout={'vertical'}
        form={form}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="项目名称">
          <Input placeholder="请输入项目名称" />
        </Form.Item>
        <Form.Item label="项目路径">
          <Input placeholder="请选择项目路径" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default  projectInfoForm;