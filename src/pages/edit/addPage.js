import React from 'react';
import { Form, Input } from 'antd';
import { SettingFilled,  SyncOutlined } from '@ant-design/icons';

const addPage = (props) => {
  const [form] = Form.useForm();

  const onFormLayoutChange = () => {
    
  };

  return (
      <div className="add-page">
           <Form
                style={{ paddingTop: '100px' }}
                name="basic"
                layout={'vertical'}
                form={form}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="1.填写页面名称" name="proName" rules={[{ required: true, message: '请输入页面名称!' }]}>
                <Input placeholder="请输入页面名称" />
                </Form.Item>
            </Form>
            <div className="choose-block">
                <div className="title">2.选择区块</div>
                <div className="blocks-content">
                     <div className="block-settle">
                          <div className="defaulte">请从右侧选择区块</div>
                     </div>
                     <div className="block-collect">
                          <div className="block-title">
                               PC web
                               <SettingFilled />
                               <SyncOutlined />
                          </div>
                     </div>
                </div>
            </div>
      </div>
      
  );
};

export default  addPage;