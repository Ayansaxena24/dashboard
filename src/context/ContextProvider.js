import { notifications } from "@syncfusion/ej2";
import React, { createContext, useContext, useState} from "react";
import { UserProfile } from "../components";

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    UserProfile:false,
    notification:false,
}

export const ContextProvider = ({ children }) => {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [ isClicked, setIsClicked ] = useState(initialState);
    const [ screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:
        true});
    }
    return (
        <StateContext.Provider
        value={{ 
            activeMenu,  
            handleClick, 
            isClicked, 
            initialState, 
            setIsClicked, 
            setActiveMenu,
            screenSize,
            setScreenSize
        }}
    >
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);