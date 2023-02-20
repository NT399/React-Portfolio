import React from 'react';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    lineHeight: '64px',
    backgroundColor: '#97D2FB',
  };    

 const headerStyle1 = {
    height: 15,
    backgroundColor: '#97D2FB',
  }; 

const Header1 = () => {

  return (

    <div>
     <Layout>
     <Header style={headerStyle1}></Header>
        <Header style={headerStyle}>
            <Title level={2}>Nimeash's Portfolio</Title>
        </Header>
     </Layout>
    </div>
       
  );
};

export default Header1;
