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

import { ordersData, ordersGrid } from "../data/dummy";
import { Button, Header2 } from "../components";
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
import blueberry from '../data/blueberry.jpg';
import choco from '../data/choco.jpg';
import brownie from '../data/brownie.jpg';
import cup from '../data/cup.jpg';
import pumpkin from '../data/pumpkin.jpg'; 

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
 
  

const Campaign3 = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search", "Delete"];
  const editing = { allowDeleting: true, allowEditing: true };
  
  const [butCli, setButCli] = useState(false);
  const handleClick = () => {
    setButCli(prev=>!prev);
  };
   
  const active="rounded-lg border-gray-300 border-2 m-2 p-0.5 flex flex-row relative w-full";
  const normal="rounded-lg border-blue-400 border-2 m-2 p-0.5 flex flex-row relative w-full";
   
  return (
    <>
      <div className="rounded-lg border-2 bg-white mt-12">
        <div className="flex flex-row ">
          <p className="font-bold text-sm text-black mt-3 ml-3 pt-3">
            Choose the Product
          </p>
          <p className="text-xs text-gray-400 ml-2 mt-3 pt-3.5">
            (Step 2 of 4)
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

        <div className="w-[98%] grid grid-cols-3 gap-2 gap-y-3.5 mx-1.5">
          <button className={butCli?active:normal} onClick={handleClick}>
          <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={blueberry}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">Bluberry cake with raw toppings</p>
              <p className="text-xs text-gray-400">
                Rs:2,290
              </p>
            </div>
          </button>
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
            <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={choco}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">
                Chocolate tuffle cake
              </p>
              <p className="text-xs text-gray-400">
                Rs:2,190
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
          <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={brownie}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">Brownie cake with fluffy cream</p>
              <p className="text-xs text-gray-400">
                Rs:1,222
              </p>
            </div>
          </div>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-2 gap-y-3.5 mx-1.5">
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
          <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={choco}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">Ferro rocher cake</p>
              <p className="text-xs text-gray-400">
                Rs:1,234
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
          <div className="my-0 mr-1 ml-1 pt-2 scale-50 w-10 h-6"><img src={cup}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">Custurd mixed with fruit cake</p>
              <p className="text-xs text-gray-400">
                Rs:2,456
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
          <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={choco}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">Best raw topping choco cake</p>
              <p className="text-xs text-gray-400">
                Rs:2,345
              </p>
            </div>
          </div>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-2 gap-y-3.5 mx-1.5">
        <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
        <div className="my-0 mr-1 ml-1 scale-50 w-10 h-6"><img src={cup}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">
                Green cup cakes
              </p>
              <p className="text-xs text-gray-400">
                Rs:1,234
              </p>
            </div>
            {/* <div className="justify-end">
            {<BsCheckCircle/>}
            </div> */}
          </div>
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
          <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={blueberry}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">
                Blueberry topping cakes
              </p>
              <p className="text-xs text-gray-400">
                Rs:2,456
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2 m-2 p-0.5 flex flex-row relative w-full">
          <div className="my-0 mr-1 scale-50 w-14 h-14"><img src={pumpkin}/></div>
            <div>
              <p className="font-semibold text-sm pt-2">
                Strawberry cakes with blueberry
              </p>
              <p className="text-xs text-gray-400">
                Rs:2,345
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end">
        <button className="bg-blue-600 px-8 py-2 mt-6 mb-20 text-white rounded-lg">
          Continue
        </button>
      </div>
    </>
  );
};

export default Campaign3;
