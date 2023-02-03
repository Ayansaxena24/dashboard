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
import blueberry from '../../data/blueberry.jpg';
import choco from '../../data/choco.jpg';
import brownie from '../../data/brownie.jpg';
import cup from '../../data/cup.jpg';
import pumpkin from '../../data/pumpkin.jpg'; 

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
 
  

const Step2 = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search", "Delete"];
  const editing = { allowDeleting: true, allowEditing: true };
  
  const [butCli, setButCli] = useState(0);
  const handleClick = (e) => { e.preventDefault() 
    setButCli( e.target.id);
  };
  console.log(butCli)
   
  const active="rounded-lg border-gray-300 border-2 m-2 p-0.5 flex flex-row w-full ";
  const normal="rounded-lg border-blue-400 border-2 m-2 p-0.5 flex flex-row w-full";
   
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
          <div id={1} className={butCli==1 ?normal:active} onClick={handleClick}>
          <div id={1} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={blueberry}/></div>
            <div id={1} onClick={handleClick}>
              <p id={1} onClick={handleClick} className="font-semibold text-sm pt-2">Bluberry cake with raw toppings</p>
              <p id={1} onClick={handleClick} className="text-xs text-gray-400">
                Rs:2,290
              </p>
            </div>
          </div>
          <div id={2} className={butCli==2 ?normal:active} onClick={handleClick}>
            <div id={2} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={choco}/></div>
            <div id={2} onClick={handleClick}>
              <p id={2} onClick={handleClick} className="font-semibold text-sm pt-2">
                Chocolate tuffle cake
              </p>
              <p id={2} onClick={handleClick} className="text-xs text-gray-400">
                Rs:2,190
              </p>
            </div>
          </div>
          <div id={3} className={butCli==3 ?normal:active} onClick={handleClick}>
          <div id={3} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={brownie}/></div>
            <div>
              <p id={3} onClick={handleClick} className="font-semibold text-sm pt-2">Brownie cake with fluffy cream</p>
              <p id={3} onClick={handleClick} className="text-xs text-gray-400">
                Rs:1,222
              </p>
            </div>
          </div>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-2 gap-y-3.5 mx-1.5">
        <div id={4} className={butCli==4 ?normal:active} onClick={handleClick}>
          <div id={4} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={choco}/></div>
            <div id={4} onClick={handleClick}>
              <p id={4} onClick={handleClick} className="font-semibold text-sm pt-2">Ferro rocher cake</p>
              <p id={4} onClick={handleClick} className="text-xs text-gray-400">
                Rs:1,234
              </p>
            </div>
          </div>
          <div id={5} className={butCli==5 ?normal:active} onClick={handleClick}>
          <div id={5} onClick={handleClick} className="my-0 mr-1 ml-1 pt-2 scale-50 w-10 h-6"><img src={cup}/></div>
            <div id={5} onClick={handleClick}>
              <p id={5} onClick={handleClick} className="font-semibold text-sm pt-2">Custurd mixed with fruit cake</p>
              <p id={5} onClick={handleClick} className="text-xs text-gray-400">
                Rs:2,456
              </p>
            </div>
          </div>
          <div id={6} className={butCli==6 ?normal:active} onClick={handleClick}>
          <div id={6} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={choco}/></div>
            <div id={6} onClick={handleClick}>
              <p id={6} onClick={handleClick} className="font-semibold text-sm pt-2">Best raw topping choco cake</p>
              <p id={6} onClick={handleClick} className="text-xs text-gray-400">
                Rs:2,345
              </p>
            </div>
          </div>
        </div>

        <div className="w-[98%] grid grid-cols-3 gap-2 gap-y-3.5 mx-1.5">
        <div id={7} className={butCli==7 ?normal:active} onClick={handleClick}>
        <div id={7} onClick={handleClick} className="my-0 mr-1 ml-1 scale-50 w-10 h-6"><img src={cup}/></div>
            <div id={7} onClick={handleClick}>
              <p id={7} onClick={handleClick} className="font-semibold text-sm pt-2">
                Green cup cakes
              </p>
              <p id={7} onClick={handleClick} className="text-xs text-gray-400">
                Rs:1,234
              </p>
            </div>
            {/* <div className="justify-end">
            {<BsCheckCircle/>}
            </div> */}
          </div>
          <div id={8} className={butCli==8 ?normal:active} onClick={handleClick}>
          <div id={8} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={blueberry}/></div>
            <div id={8} onClick={handleClick}>
              <p id={8} onClick={handleClick} className="font-semibold text-sm pt-2">
                Blueberry topping cakes
              </p>
              <p id={8} onClick={handleClick} className="text-xs text-gray-400">
                Rs:2,456
              </p>
            </div>
          </div>
          <div id={9} className={butCli==9 ?normal:active} onClick={handleClick}>
          <div id={9} onClick={handleClick} className="my-0 mr-1 scale-50 w-14 h-14"><img src={pumpkin}/></div>
            <div id={9} onClick={handleClick} >
              <p id={9} onClick={handleClick} className="font-semibold text-sm pt-2">
                Strawberry cakes with blueberry
              </p>
              <p id={9} onClick={handleClick} className="text-xs text-gray-400">
                Rs:2,345
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
