
import {useState} from "react"
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppHooks";
import { openRegisterModal } from "../../slices/registerModalSlice";

import Avatar from "../Avatar";
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState (false)
    const dispatch = useAppDispatch()

    const toggleOpen = ()=>{
        setIsOpen((value)=>!value)
    }

    const registermodal = ()=>{
        dispatch(openRegisterModal())
    }

  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div 
            onClick={toggleOpen}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                 <AiOutlineMenu/>
                 <div className=" hidden md:block">
                 <Avatar/>
                 </div>
            </div>

        </div>

        { isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[100%] bg-white overflow-hidden text-sm md:text-xm right-0 top-12">                
                <div className=" flex flex-col cursor-pointer ">
              
                <MenuItem
                onclick={registermodal}
                label="Register"
                />
                <MenuItem
                onclick={()=>{}}
                label="my quotes"
                />
                

                </div>
                </div>
            ) }
            
            
          
        
       

    </div>
  )
}

export default UserMenu