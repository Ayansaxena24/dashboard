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

const Step4 = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search", "Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  const [butCli, setButCli] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setButCli(e.target.id);
  };

  const active =
    "rounded-lg border-gray-300 border-2 m-2 p-0.5 flex flex-row relative w-full pr-2.5";
  const normal =
    "rounded-lg border-blue-400 border-2 m-2 p-0.5 flex flex-row relative w-full pr-2.5";

  return (
    <div className="rounded-lg border-2 bg-white mt-12">
      <div className="flex flex-row ">
        <p className="font-bold text-sm text-black mt-3 ml-3 pt-3">
          Ready to go
        </p>
        <p className="text-xs text-gray-400 ml-2 mt-3 pt-3.5">(Step 4 of 4)</p>
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

      <div className="w-[98%] flex flex-row gap-2 gap-y-3.5 mx-1.5">
        <div
          id={1}
          className={butCli == 1 ? normal : active}
          onClick={handleClick}
        >
          <div
            id={1}
            onClick={handleClick}
            className="my-0 mr-1 scale-50 w-14 h-14"
          >
            <img id={1} onClick={handleClick} src={blueberry} />
          </div>
          <div className="pr-2">
            <div id={1} onClick={handleClick}>
              <p
                id={1}
                onClick={handleClick}
                className="font-semibold text-sm pt-2 text-left text-blue-800"
              >
                Mukund Cake Shop
              </p>
              <p
                id={1}
                onClick={handleClick}
                className="text-xs text-gray-400 flex w-full justify-start"
              >
                Sponsored
              </p>
            </div>
            <p id={1} onClick={handleClick} className="text-sm text-left mt-1">
              We are the best Bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </p>
            <div
              id={1}
              onClick={handleClick}
              className="bg-gray-300 my-3 mr-4 w-full"
            >
              <img
                id={1}
                onClick={handleClick}
                className="pd-1 justify-start w-full"
                src={cake1}
              />
              <div id={1} onClick={handleClick} className="p-4 flex flex-row">
                <p id={1} onClick={handleClick} className="text-sm text-left">
                  Mukund Cake Shop
                </p>
                <div
                  id={1}
                  onClick={handleClick}
                  className="flex w-full justify-end"
                >
                  <button
                    id={1}
                    onClick={handleClick}
                    className="bg-gray-200 border-gray-600 border-2 border-spacing-3 px-8 py-0 mt-1 mb-2 text-black rounded-lg"
                  >
                    Like
                  </button>
                </div>
              </div>
            </div>
            {butCli == 1 ? (
              <div className="flex items-center justify-between w-full">
                <button
                  id={1}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Change Image
                </button>
                <button
                  id={1}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Edit text
                </button>
              </div>
            ) : null}
          </div>
        </div>


        <div
          id={1}
          className={butCli == 2 ? normal : active}
          onClick={handleClick}
        >
          <div
            id={2}
            onClick={handleClick}
            className="my-0 mr-1 scale-50 w-14 h-14"
          >
            <img id={2} onClick={handleClick} src={blueberry} />
          </div>
          <div className="pr-2">
            <div id={2} onClick={handleClick}>
              <p
                id={2}
                onClick={handleClick}
                className="font-semibold text-sm pt-2 text-left text-blue-800"
              >
                Mukund Cake Shop
              </p>
              <p
                id={2}
                onClick={handleClick}
                className="text-xs text-gray-400 flex w-full justify-start"
              >
                Sponsored
              </p>
            </div>
            <p id={2} onClick={handleClick} className="text-sm text-left mt-1">
              We are the best Bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </p>
            <div
              id={2}
              onClick={handleClick}
              className="bg-gray-300 my-3 mr-4 w-full"
            >
              <img
                id={2}
                onClick={handleClick}
                className="pd-1 justify-start w-full"
                src={cake2}
              />
              <div id={2} onClick={handleClick} className="p-4 flex flex-row">
                <p id={2} onClick={handleClick} className="text-sm text-left">
                  Mukund Cake Shop
                </p>
                <div
                  id={2}
                  onClick={handleClick}
                  className="flex w-full justify-end"
                >
                  <button
                    id={2}
                    onClick={handleClick}
                    className="bg-gray-200 border-gray-600 border-2 border-spacing-3 px-8 py-0 mt-1 mb-2 text-black rounded-lg"
                  >
                    Like
                  </button>
                </div>
              </div>
            </div>
            {butCli == 2 ? (
              <div className="flex items-center justify-between w-full">
                <button
                  id={2}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Change Image
                </button>
                <button
                  id={2}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Edit text
                </button>
              </div>
            ) : null}
          </div>
        </div>


        <div
          id={3}
          className={butCli == 3 ? normal : active}
          onClick={handleClick}
        >
          <div
            id={3}
            onClick={handleClick}
            className="my-0 mr-1 scale-50 w-14 h-14"
          >
            <img id={3} onClick={handleClick} src={blueberry} />
          </div>
          <div className="pr-2">
            <div id={3} onClick={handleClick}>
              <p
                id={3}
                onClick={handleClick}
                className="font-semibold text-sm pt-2 text-left text-blue-800"
              >
                Mukund Cake Shop
              </p>
              <p
                id={3}
                onClick={handleClick}
                className="text-xs text-gray-400 flex w-full justify-start"
              >
                Sponsored
              </p>
            </div>
            <p id={3} onClick={handleClick} className="text-sm text-left mt-1">
              We are the best Bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </p>
            <div
              id={3}
              onClick={handleClick}
              className="bg-gray-300 my-3 mr-4 w-full pd-0"
            >
              <img
                id={3}
                onClick={handleClick}
                className="pd-1 justify-start w-full h-40"
                src={cake3}
              />
              <div id={3} onClick={handleClick} className="p-4 flex flex-row">
                <p id={3} onClick={handleClick} className="text-sm text-left">
                  Mukund Cake Shop
                </p>
                <div
                  id={3}
                  onClick={handleClick}
                  className="flex w-full justify-end"
                >
                  <button
                    id={3}
                    onClick={handleClick}
                    className="bg-gray-200 border-gray-600 border-2 border-spacing-3 px-8 py-0 mt-1 mb-2 text-black rounded-lg"
                  >
                    Like
                  </button>
                </div>
              </div>
            </div>
            {butCli == 3 ? (
              <div className="flex items-center justify-between w-full">
                <button
                  id={3}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Change Image
                </button>
                <button
                  id={3}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Edit text
                </button>
              </div>
            ) : null}
          </div>
        </div>


        <div
          id={4}
          className={butCli == 4 ? normal : active}
          onClick={handleClick}
        >
          <div
            id={4}
            onClick={handleClick}
            className="my-0 mr-1 scale-50 w-14 h-14"
          >
            <img id={4} onClick={handleClick} src={blueberry} />
          </div>
          <div classNme="pr-2">
            <div id={4} onClick={handleClick}>
              <p
                id={4}
                onClick={handleClick}
                className="font-semibold text-sm pt-2 text-left text-blue-800"
              >
                Mukund Cake Shop
              </p>
              <p
                id={4}
                onClick={handleClick}
                className="text-xs text-gray-400 flex w-full justify-start"
              >
                Sponsored
              </p>
            </div>
            <p id={4} onClick={handleClick} className="text-sm text-left mt-1">
              We are the best Bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </p>
            <div
              id={4}
              onClick={handleClick}
              className="bg-gray-300 my-3 mr-4 w-full"
            >
              <img
                id={4}
                onClick={handleClick}
                className="pd-1 justify-start w-full h-40"
                src={cake4}
              />
              <div id={4} onClick={handleClick} className="p-4 flex flex-row">
                <p id={4} onClick={handleClick} className="text-sm text-left">
                  Mukund Cake Shop
                </p>
                <div
                  id={4}
                  onClick={handleClick}
                  className="flex w-full justify-end"
                >
                  <button
                    id={4}
                    onClick={handleClick}
                    className="bg-gray-200 border-gray-600 border-2 border-spacing-3 px-8 py-0 mt-1 mb-2 text-black rounded-lg"
                  >
                    Like
                  </button>
                </div>
              </div>
            </div>
            {butCli == 4 ? (
              <div className="flex items-center justify-between w-full">
                <button
                  id={4}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Change Image
                </button>
                <button
                  id={4}
                  onClick={handleClick}
                  className="bg-blue-200 border-spacing-1 px-3 py-0 mt-1 mb-5 text-blue-700 rounded-md"
                >
                  Edit text
                </button>
              </div>
            ) : null}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Step4;
