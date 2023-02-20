import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import { Menu } from 'antd';

const items = [
    {
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            About me
          </a>
        ),
        key: 'alipay',
      },
      {
        label: (
          <a href="#Projects" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
          
        ),
        key: 'alipay',
      },
      {
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Contact me
          </a>
        ),
        key: 'alipay',
      },
      {
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        ),
        key: 'alipay',
      },
    ];

const Nav = ({ Page, clickedPage }) => {

    const [current, viewCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      viewCurrent(e.key);
    };
    return (
  
      <div>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={[
{
    label:   
  <>
    <a 
    href="#"
          onClick={() => clickedPage('About')}
          className={Page === 'About' ? 'link active' : 'link'}
    >
    About me
    </a>
    </>
    },
{
    label:   
  <>
    <a 
    href="#project"
          onClick={() => clickedPage('Project')}
          className={Page === 'Project' ? 'link active' : 'link'}
    >
    Portfolio
    </a>
    </>
    },
    {
        label:   
      <>
        <a 
        href="#contact"
              onClick={() => clickedPage('Contact')}
              className={Page === 'Contact' ? 'link active' : 'link'}
        >
        Contact
        </a>
        </>
        },
        {
            label:   
          <>
            <a 
            href="https://doc-0c-0k-docs.googleusercontent.com/docs/securesc/jb59hfoeavcsqacd4g237r0q5hg7bcll/fic38g3fk43ppcpvgfj9l7tpuoq7skmn/1676887200000/07893333572458839370/07893333572458839370/1x_Wwboz35QAAsw_2RA99Kad70xRi-Lrl?ax=AB85Z1AnxYccB8khoBdntQn-xWpyI0pxfl__dRD_c8f1Kcm7_7bsbv2MZBz4dV3u42eH6QfPggUPjDH_AJBWBfORLrMz4F0ffcp-LeimEG-Q1FeuMWQfHJExTtQOv36Q46yIqEShy1QBJ04Mqkv69Rufpb1GTe_1WxP1iiVoMnOB1mF7SA7ZXZ8WomOrEHTQY8P3pQfL-IFp6SGXJvMqSuKZx3TCQPR1NiZJNB88S27jWd258ghvmSaeAQQ_pS4XnZU79Fba14aUQ-15iH-Kj0dBsyo9U92MfWWr1QuKHt1PcMe1I2tQmYEHF0C29n5d2i3Tf9Mj71f0_WPrXYZtCCRGNiVpPez7jVDhlMMWvuougepjUtOJKK9XC5cdJFqYlGtaqzNZ_pNLmXC6mNk4SDcFVTQoMg4wjorsZk203xR4pZ2eeBCPm3cNu3VVwktJCYuKUOIEl3KQgcqdEAnaSy37ti83dxt_Kvcc0bRVJNVY1UahO0UnB3RBZt9OJwHq6UoSo9zmlXbqamy00KzlWxhSF5GluoLWzdKbWkqWYmCV3oAL4qng9u-CXvkfT1BpDgaa0aoP4LvlcLUUwkL1dDz2kvysrmDo_6tb-TYguZXNV27trjnjRMexMqUg7fROwAxH63WN4wUBBjk-ZYNG7SsC58qqA4HkP_bW8XPueo2M9yzlmVCK6LpjmY7Mm2wn5qNLtXrHdjYW2ALEDwp0gCjOsdg0Fdivt4Y6z5de7mf1H0w-rmBc6ZmBRR5-faRvgAmgXjxwciJBxdVkRwiR6XIM3yNA-joifwxi4NbEVSqNyfkkPHsyIKs8-8G7M0aL3GqgTCurL9QcadCKcT0qB7toWzA1j9bSccE_3DxtJmXh4c9nptmD9y7w6UwXZjIzaCKpvA&uuid=8fd1ea92-9389-4ae6-81c4-209175b8f63b&authuser=0&nonce=5g8g3fd1qbsk0&user=07893333572458839370&hash=e49ki8nfsv5r30fs7scqloapenj5jbvt"
            >
            Resume
            </a>
            </>
            },

    ]}    
    />
      </div>
         
    );
  };
  
  export default Nav;
  