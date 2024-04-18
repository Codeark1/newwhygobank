
import { Flex, Form, Input, Button } from 'antd';
import Axios from 'axios';
import { Link } from 'react-router-dom'; 
import loginLogo from '../../assets/white.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Send login request to server
      const response = await Axios.post('https://whygobank.digitalworldclassscholars.org/api/login', values);
      
      console.log('Response from server:', response.data);
      // Navigate to Dashboard upon successful login
      navigate("/Dashboard");
    } catch (error) {
      console.error('Error:', error);
    }
         navigate("/Dashboard")

  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <Flex vertical={true} gap={50} align="center" justify="center">
        <div>
          <img src={loginLogo} alt="Logo" />
        </div>
        <div className=" ">
          <h2 className="text-2xl mb-4 font-semibold text-center">Sign in to Your Account</h2>
          <Form
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email or username!' }]}
            >
              <Input placeholder="Enter your email or username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit" className="w-full bg-black text-white">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className='flex gap-2'>
          <p> Do not have an account yet?</p> 
          <Link to="/sign-up" className=' text-orange-500'>Sign up</Link>
        </div>
      </Flex>
    </div>
  );
}

export default Login;
