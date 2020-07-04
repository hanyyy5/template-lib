import React from 'react';
import { Form, Input } from 'antd';
import { SettingFilled,  SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const { Search } = Input;
const addPage = (props) => {
  const [form] = Form.useForm();

  const onFormLayoutChange = () => {
    
  };

  return (
      <div className="add-page">
           <Form
                name="basic"
                layout={'vertical'}
                form={form}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="1.填写页面名称" name="proName" rules={[{ required: true, message: '请输入页面名称!' }]}>
                <Input placeholder="名称必须英文字母A-Z开头，只包含英文和数字，不允许有特殊字符" />
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
                          <Search
                            placeholder="输入关键字查找物料"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                          />
                     </div>
                </div>
            </div>
            <div className="button-line">
              <Button type="primary"> 生成页面 </Button>
            </div>

      </div>
      
  );
};

export default  addPage;