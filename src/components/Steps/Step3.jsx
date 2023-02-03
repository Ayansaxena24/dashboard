import React from "react";
import { useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Edit,
  Inject,
  Toolbar,
  Search,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid } from "../../data/dummy";
import { Button, Header2 } from "..";
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
import { BiCurrentLocation } from "react-icons/bi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import blueberry from "../../data/blueberry.jpg";
import choco from "../../data/choco.jpg";
import brownie from "../../data/brownie.jpg";
import cup from "../../data/cup.jpg";
import pumpkin from "../../data/pumpkin.jpg";
import cake1 from "./cake1.jpg";
import cake2 from "./cake2.jpg";
import cake3 from "./cake3.jpg";
import cake4 from "./cake4.jpg";
import Date from "./Date";
import SliderSizes2 from "./Slider2";
import SliderSizes from "./Slider";
import ColorToggleButton from "./Toggle";
import ColorToggleButton2 from "./Toggle2";

// const CampaignItem = () => {
//   return (
//     <div className="rounded-lg border-2 m-2 p-2 flex flex-row relative w-full">
//       <div className="my-4 mr-2">{<FiPhoneCall />}</div>
//       <div>
//         <p className="font-semibold text-sm">Get Leads as calls</p>
//         <p className="text-xs text-gray-400">
//           Reach broad audience and get leads through calls
//         </p>
//       </div>
//     </div>
//   );
// };

const Step3 = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search", "Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  const [butCli, setButCli] = useState(false);
  const handleClick = () => {
    setButCli((prev) => !prev);
  };

  const active =
    "rounded-lg border-gray-300 border-2 m-2 p-0.5 flex flex-row relative w-full pr-2.5";
  const normal =
    "rounded-lg border-blue-400 border-2 m-2 p-0.5 flex flex-row relative w-full pr-2.5";

    const [selected, setselected] = useState("")

  return (
    <div className="rounded-lg border-2 bg-white mt-12 pr-2">
      <div className="flex flex-row ">
        <p className="font-bold text-ls text-black mt-3 ml-3 pt-3">
          Campaign Settings
        </p>
        <p className="text-sm text-gray-400 ml-2 mt-3 pt-3.5">(Step 3 of 4)</p>
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

      <div className="px-3">
        <div className="flex flex-row">
          <button className="rounded-full bg-blue-700 px-2 mr-2 scale-75 text-white">
            1
          </button>
          <p className="underline text-ls font-semibold">
            Budget and dates info
          </p>
        </div>
        <div className="pl-8">
          <p className="mb-1 mt-4 pt-4 text-sm text-gray-500 font-semibold">
            Budget Timeline
          </p>
          <ColorToggleButton2/>
        </div>
        <div className="flex flex-row pl-8 mt-4 pt-4 gap-3">
          <div className="w-full">
            <p className="text-sm text-gray-500 font-semibold pb-1">
              Start date
            </p>
            <Date />
          </div>
          <div className="w-full">
            <p className="text-gray-500 text-sm font-semibold pb-1">End date</p>
            <Date />
          </div>
        </div>
        <div className="pl-8 mt-4 pt-4 text-sm text-gray-500 font-semibold ">
          <p>Enter campaign budget (INR)</p>
          <SliderSizes />
          <div className="flex items-center justify-between w-full">
          <p>100</p>
          <p>1,00,000</p>
          </div>
        </div>
      </div>

      <div className="px-3 pb-9 mb-9 mt-5">
        <div className="flex flex-row">
          <button className="rounded-full bg-blue-700 px-2 mr-2 scale-75 text-white">
            2
          </button>
          <p className="underline text-ls font-semibold">Location info</p>
        </div>
        <div className="pl-8">
        <p className=" mt-4 pt-4 text-sm text-gray-500 font-semibold">
            Location type
          </p>
          <ColorToggleButton setselected={setselected}/>
          {/* <button className="pl-8 mt-2 pt-2">Toggle</button> */}
        </div>
        <div>
           
        <div>
        <p className="pl-8 mt-4 pt-4 text-sm text-gray-500 font-semibold pb-1">
            Select location
          </p>
          <div className="flex flex-row ml-8 flex-1 border-1 focus:outline-2 rounded-lg w-3/4">
            <input disabled={selected==="radius"} className="focus:outline-none rounded-md border-0 w-full" type="text" name="Select"/>
            <BiCurrentLocation />
          </div> 
          </div> 
          <div className="pl-8 mt-4 pt-4 w-full">
            <p className="text-sm text-gray-500 font-semibold pb-1">Select target radius (Kms)</p>
            <SliderSizes2 disabled={selected==="location"}/>
            <div className="flex items-center justify-between w-full">
            <p>1</p>
            <p>30</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Step3;
