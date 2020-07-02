import React, { useState, useRef } from 'react';
import { Form, Input } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';


const projectInfoForm = () => {
  const [form] = Form.useForm();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ filePath, setFilePath ] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fileInputRef = useRef();
  const onFormLayoutChange = () => {
    
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  }

  const fileChooseChanged = (e) => {
    var file = e.target.files[0];
    setFilePath(file.path);
  }

  return (
      <Form
        style={{ paddingTop: '100px' }}
        name="basic"
        layout={'vertical'}
        form={form}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="项目名称" name="proName" rules={[{ required: true, message: '请输入项目名称!' }]}>
          <Input placeholder="请输入项目名称" />
        </Form.Item>
        <Form.Item label="项目路径" name="proPath"  rules={[{ required: true, message: '请选择项目路径!' }]}>
          <Input placeholder="请选择项目路径" readOnly value={filePath}/>
          <FolderOpenOutlined className="path-choose" onClick={triggerFileInput}/>
          <input type="file" 
                className="hidden-input" 
                webkitdirectory="true" 
                name="chooseFilePath" 
                ref={fileInputRef} 
                onChange={(e) => fileChooseChanged(e)}/>
        </Form.Item>
      </Form>
  );
};

export default  projectInfoForm;