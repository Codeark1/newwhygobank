import { Flex } from 'antd';

import { HomeOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='h-16 '>
      <Flex align='center' justify='center' style={{ height: '100%' }} gap={35}>
        <div className="flex flex-col items-center group">
          <HomeOutlined className=' bg-slate-500 p-2 text-xl group-hover:text-gray-300 transition duration-300' />
          <span className="text-xs  group-hover:text-gray-300 transition duration-300">Home</span>
        </div>
        <div className="flex flex-col items-center group">
          <SendOutlined className=' text-xl group-hover:text-gray-300 transition duration-300' />
          <span className="text-xs  group-hover:text-gray-300 transition duration-300">Send</span>
        </div>
        <div className="flex flex-col items-center group">
          <UserOutlined className='text-xl group-hover:text-gray-300 transition duration-300' />
          <span className="text-xs  group-hover:text-gray-300 transition duration-300">Profile</span>
        </div>
      </Flex>
    </div>
  );
};

export default Footer;
