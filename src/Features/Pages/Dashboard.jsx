
import Footer from "../../Component/Footer";
import { Divider, Flex } from "antd";
import { LogoutOutlined, UserOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Customer from "../Customer/Customer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  const Transaction = [
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    },
    {
      nameInitial: "AA",
      transactionType: "credit",
      Date: "11/02/20204",
      time: "02:30pm"
    }
  ];

  return (
    <div className="">
      <Flex justify="space-between" className="px-5 py-5">
        <div>
          <Flex gap={10} align="center">
            <Avatar size={30} icon={<UserOutlined />} />
            <Customer />
          </Flex>
        </div>
        <div>
          <LogoutOutlined style={{ fontSize: "30px" }}  onClick={()=> navigate("/login")}/>
        </div>
      </Flex>
      <Flex justify="center">
        <div className="shadow-lg bg-[#020216] text-white font-bold w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[40%] max-w-[30rem] h-[25vh] rounded-md">
          <Flex vertical={true}>
            <div className="flex px-3 py-2 justify-between">
              <p>Balance</p>
              <EyeOutlined />
            </div>
            <div className="flex justify-center items-center mt-9 font-bold text-3xl">
              <h1>500,00,00</h1>
            </div>
            <div className="mt-20 px-4">
              <p>NGN</p>
            </div>
          </Flex>
        </div>
      </Flex>
      <div className="mt-5 px-5 md:px-10 lg:px-20">
        <p className="font-bold">Recent Transaction</p>
        {Transaction.map((transaction, index) => (
          <div key={index} className="px-5 py-2 border-b ">
            <Flex align="center" className="bg-slate-100">
              <div className="border p-5 m-5 text-white font-semibold bg-orange-400 text-2xl">
                {transaction.nameInitial}
              </div>
              <div className="flex flex-col leading-8">
                <p className="text-center font-medium">{transaction.transactionType}</p>
                <Divider className=" bg-black" />
                <Flex gap={15} justify="center">
                  <p className="text-center font-normal">{transaction.Date}</p>
                  <p className="text-center font-normal">{transaction.time}</p>
                </Flex>
              </div>
            </Flex>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
