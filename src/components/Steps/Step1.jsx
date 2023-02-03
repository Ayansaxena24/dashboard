import { useState } from "react";
import { ordersData, ordersGrid } from "../../data/dummy";
import { Button, Header2 } from "../../components";
import { FiNavigation, FiPhoneCall } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { BsShopWindow } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { BsCalendar2MinusFill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { RiInstallLine } from "react-icons/ri";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const Step1 = () => {

  const [butCli, setButCli] = useState(0);
  const handleClick = (e) => { e.preventDefault() 
    setButCli( e.target.id);
  };

  const active="rounded-lg border-2 m-2 p-2 flex flex-row relative w-full";
  const normal="rounded-lg border-2 border-blue-400 border-2 m-2 p-2 flex flex-row w-full";

  return (
    <div className="rounded-lg border-2 bg-white mt-12">
        <div className="flex flex-row bor">
          <p className="font-bold text-sm text-black mt-3 ml-3 pt-3">
            What you want to do?
          </p>
          <p className="text-xs text-gray-400 ml-2 mt-3 pt-3.5">
            (Step 1 of 4)
          </p>
        </div>

        <div className="m-2 mx-4">
          <hr
            style={{
              color: "#e1e3e1",
              borderColor: "#e1e3e1",
              height: "2px",
            }}
          ></hr>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-12 gap-y-3.5">

          <div id={1} className={butCli==1 ?normal:active} onClick={handleClick}>
            <div id={1} onClick={handleClick} className="my-4 mr-2">{<FiPhoneCall />}</div>
            <div id={1} onClick={handleClick}>
              <p id={1} onClick={handleClick} className="font-semibold text-sm">Get Leads as calls</p>
              <p id={1} onClick={handleClick} className="text-xs text-gray-400">
                Reach broad audience and get leads through calls
              </p>
            </div>
          </div>
          <div id={2} className={butCli==2 ?normal:active} onClick={handleClick}>
            <div id={2} onClick={handleClick} className="my-4 mr-2">{<FiMessageSquare />}</div>
            <div id={2} onClick={handleClick}>
              <p id={2} onClick={handleClick} className="font-semibold text-sm">
                Get Leads as Facebook messages
              </p>
              <p id={2} onClick={handleClick} className="text-xs text-gray-400">
                Get more Fb messages from leads
              </p>
            </div>
          </div>
          <div id={3} className={butCli==3 ?normal:active} onClick={handleClick}>
            <div id={3} onClick={handleClick} className="my-4 mr-2">{<FiUserPlus />}</div>
            <div id={3} onClick={handleClick}>
              <p id={3} onClick={handleClick} className="font-semibold text-sm">Increase page followers</p>
              <p id={3} onClick={handleClick} className="text-xs text-gray-400">
                Reach broad audience and get leads through calls
              </p>
            </div>
          </div>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-12 gap-y-3.5">
        <div id={4} className={butCli==4 ?normal:active} onClick={handleClick}>
            <div id={4} onClick={handleClick} className="my-4 mr-2">{<FiUsers />}</div>
            <div id={4} onClick={handleClick}>
              <p id={4} onClick={handleClick} className="font-semibold text-sm">Get Customer Leads</p>
              <p id={4} onClick={handleClick} className="text-xs text-gray-400">
                Encourage customers to take action
              </p>
            </div>
          </div>
          <div id={5} className={butCli==5 ?normal:active} onClick={handleClick}>
            <div id={5} onClick={handleClick} className="my-4 mr-2">{<FiEye />}</div>
            <div id={5} onClick={handleClick} className>
              <p id={5} onClick={handleClick} className="font-semibold text-sm">Get more youtube views</p>
              <p id={5} onClick={handleClick} className="text-xs text-gray-400">
                Increase organic views by obtaining attnetion
              </p>
            </div>
          </div>
          <div id={6} className={butCli==6 ?normal:active} onClick={handleClick}>
            <div id={6} onClick={handleClick} className="my-4 mr-2">{<FiNavigation />}</div>
            <div id={6} onClick={handleClick}>
              <p id={6} onClick={handleClick} className="font-semibold text-sm">Get more website traffic</p>
              <p id={6} onClick={handleClick} className="text-xs text-gray-400">
                Get the right people to visit your profile
              </p>
            </div>
          </div>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-12 gap-y-3.5">
        <div id={7} className={butCli==7 ?normal:active} onClick={handleClick}>
            <div id={7} onClick={handleClick} className="my-4 mr-2">{<BsShopWindow />}</div>
            <div id={7} onClick={handleClick}>
              <p id={7} onClick={handleClick} className="font-semibold text-sm">
                Increase Live store traffic
              </p>
              <p id={7} onClick={handleClick} className="text-xs text-gray-400">
                Drive visits to local strores, restaurants & Dealerships
              </p>
            </div>
          </div>
          <div id={8} className={butCli==8 ?normal:active} onClick={handleClick}>
            <div id={8} onClick={handleClick} className="my-4 mr-2">{<RiInstallLine />}</div>
            <div id={8} onClick={handleClick}>
              <p id={8} onClick={handleClick} className="font-semibold text-sm">
                Increase your App installs
              </p>
              <p id={8} onClick={handleClick} className="text-xs text-gray-400">
                Get more installs, interactions for your app
              </p>
            </div>
          </div>
          <div id={9} className={butCli==9 ?normal:active} onClick={handleClick}>
            <div id={9} onClick={handleClick} className="my-4 mr-2">{<RiInstallLine />}</div>
            <div id={9} onClick={handleClick} >
              <p id={9} onClick={handleClick}  className="font-semibold text-sm">
                Increase the catalogue sales
              </p>
              <p id={9} onClick={handleClick}  className="text-xs text-gray-400">
                Drive the sales of your catalogue and get more leads
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Step1