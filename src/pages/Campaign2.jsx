import React, {useState} from "react";
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
import CustomizedSteppers from "./CustomizedSteppers";

import Step1 from '../components/Steps/Step1'
import Step2 from '../components/Steps/Step2'
import Step3 from '../components/Steps/Step3'
import Step4 from '../components/Steps/Step4'


const Campaign2 = () => {

const [step, setStep] = useState(0)
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search", "Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-0 md:m-0 mt-24 p-2 md:p-10 bg-blue-50">
      <Header2
        title="Your Ad Campaign"
        category="Launch your ad in just 4 easy steps"
      />


      <CustomizedSteppers step={step}/>
      {
        step === 0 ? <Step1 /> :
          step === 1 ? <Step2 /> :
          step === 2 ? <Step3 /> :
          step === 3 ? <Step4 /> :
            <div className=""></div>
      }

      <div onClick={() => {
        setStep(step + 1);
      }} className="flex w-full justify-end">
        <button className="bg-blue-600 px-8 py-2 mt-6 mb-20 text-white rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Campaign2;
