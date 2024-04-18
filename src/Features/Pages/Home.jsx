import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/logo.svg';
import { Flex, Spin} from 'antd'; 


const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const timeout = setTimeout(() => {
      setIsLoading(false); 
      navigate('/login');
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className='h-screen grid place-content-center bg-[#020216]'>
      {isLoading &&
  <Flex vertical={true} gap={20}>

<img src={logo} alt="Logo"/>

<Spin size="large" tip="Loading..." /> 
  </Flex>
      
 
         }
    </div>
  );
};

export default Home;
