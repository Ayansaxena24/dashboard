import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import crown from '../data/crown.png';

import avatar from '../data/avatar.jpg';
import cupcake from '../data/cupcake.png';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc , icon, color, dotColor }) => (
  <TooltipComponent content={title}
  position="BottomCenter">
    <button type='button' onClick={customFunc}
      style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-gray-200"
      >
        <span style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
         />
          {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize
    (window.innerWidth); //in order to prevent useEffect to happening initially
    window.addEventListener('resize', handleResize); //if resize changes, initiate handleResize

    handleResize();

    return () => window.removeEventListener('resize', handleResize); //removing event listener
  }, []);

  useEffect(() => {
     if (screenSize<=900){
      setActiveMenu(false);
     } else {
      setActiveMenu(true);
     }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
   <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton title="Menu" customFunc={() =>
      setActiveMenu((prevActiveMenu) => 
      !prevActiveMenu)} color="blue" icon=
      {<AiOutlineMenu />} />

     <div className='flex'>
      <span className='text-gray-400 ml-1 mt-3 mr-3 text-xs'>Free trial ends in 2 days</span>
      <div className='flex items-center gap-1 cursor-pointer p-1
          hover:bg-gray-100 rounded-lg bg-orange-100'
         onClick={() => handleClick/('userProfile')
        }
         >
           <img
           className='rounded-full w-8 h-6'
           src={crown}
           />
           <p>
             {/* <span className='text-gray-400 text-14'></span> {' '} */}
             <span className='text-gray-400 font-medium ml-1 text-14 text-orange-400'>Buy Plan</span>
           </p>
           <MdKeyboardArrowDown
           className='text-gray-400 text-14' />
      </div>
      <NavButton 
       title="Menu" 
       customFunc={() =>
       setActiveMenu((prevActiveMenu) => 
      !prevActiveMenu)} 
       color="blue" 
       icon={<AiOutlineMenu />} />

       <NavButton 
       title="Cart" 
       customFunc={() => handleClick('cart')
      } 
       color="blue" 
       icon={<FiShoppingCart />} 
       />
       <NavButton 
       title="Chat" 
       customFunc={() => handleClick('chat')
      } 
       color="blue" 
       icon={<BsChatLeft />} 
       />
       <NavButton 
       title="Notifications"
       dotColor="#03C9D7" 
       customFunc={() => handleClick('notification')
      } 
       color="blue" 
       icon={<RiNotification3Line />} 
       />

       <TooltipComponent
       content="Profile"
       position="BottomCenter"
       >
         <div className='flex items-center gap-2 cursor-pointer p-1
          hover:bg-gray-100 rounded-lg'
         onClick={() => handleClick/('userProfile')
        }
         >
           <img
           className='rounded-full w-8 h-9'
           src={cupcake}
           />
           <p>
             {/* <span className='text-gray-400 text-14'></span> {' '} */}
             <span className='text-gray-400 font-medium ml-1 text-14'>Mukund Cake Shop</span>
           </p>
           <MdKeyboardArrowDown
           className='text-gray-400 text-14' />
         </div>
       </TooltipComponent>

       {isClicked.cart && <Cart />}
       {isClicked.chat && <Chat />}
       {isClicked.notification && <Notification />}
       {isClicked.UserProfile && <UserProfile />}

     </div>
   </div>
   )
 }

export default Navbar
