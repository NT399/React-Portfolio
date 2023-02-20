import React from 'react';
import { Typography, Layout } from 'antd';

import {
    GithubOutlined,
    LinkedinOutlined,
    TwitterOutlined
      } from '@ant-design/icons';
      import { Button} from 'antd';

const { Footer } = Layout;

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
    height: 70,
  };

  const bg = {
    background: '#e1eff6'
  }


const Footer1 = () => {

  return (


     <Layout>
         <Footer style={bg}></Footer>
        <Footer style={footerStyle}>
        <Button type="primary" href="https://github.com/NT399" icon={<GithubOutlined />}>
        </Button>
        &nbsp;
        <Button type="primary" href="to update when activate linkedin" icon={<LinkedinOutlined />}>
        </Button>
        &nbsp;
        <Button type="primary" href="to update when activate twitter" icon={<TwitterOutlined />}>
        </Button>
        </Footer>
     </Layout>
 
       
  );
};

export default Footer1;
