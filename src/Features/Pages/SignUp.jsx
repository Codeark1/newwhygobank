import { Form, Input, Button, Flex } from 'antd';
// import { useNavigate } from 'react-router-dom';
import { LeftCircleOutlined } from '@ant-design/icons';
import { useRegisterMutation } from '../../Service'; 
import logo from "../../assets/white.png";

const SignUp = () => {
  const [registerMutation, { isLoading }] = useRegisterMutation();
  // const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Received values:', values);
    try {
      const response = await registerMutation(values).unwrap();
      console.log(response.data);
      // Handle successful registration
      // navigate("/login");
    } catch (error) {
      console.error('Failed:', error);
      // Handle registration failure
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    // Handle form validation failure
  };

  return (
    <div className='h-screen bg-yellow-600'>
      <div className='pl-5 p-1'>
        <LeftCircleOutlined onClick={() => window.history.back()} style={{ fontSize: "30px", color: "blue" }} />
      </div>
      <div className='grid place-content-center mt-14'>
        <Flex gap={30} vertical={true}>
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {/* Full Name */}
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input placeholder='Full Name' />
              </Form.Item>
              {/* Email */}
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder='E-mail' />
              </Form.Item>
              {/* Username */}
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder='Username' />
              </Form.Item>
              {/* Password */}
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder='Password' />
              </Form.Item>
              {/* Confirm Password */}
              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder='Confirm Password' />
              </Form.Item>
              {/* Sign Up Button */}
              <Form.Item>
                <Button htmlType="submit" loading={isLoading} className='bg-orange-600 text-white font-bold'>
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div>jjjj</div>
        </Flex>
      </div>
    </div>
  );
};

export default SignUp;
