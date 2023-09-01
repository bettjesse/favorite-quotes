
import {useState} from "react"
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppHooks";
import { openRegisterModal } from "../../slices/registerModalSlice";
import { openLoginModal } from "../../slices/loginModalSlice";

import Avatar from "../Avatar";
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState (false)
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector((state)=> state.auth.userInfo)

    const toggleOpen = ()=>{
        setIsOpen((value)=>!value)
    }

    const registerModalOpen = ()=>{
        dispatch(openRegisterModal())
    }
    const loginModalOpen = ()=>{
        dispatch(openLoginModal())
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

        { isOpen &&  (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[100%] bg-white overflow-hidden text-sm md:text-xm right-0 top-12">                
                <div className=" flex flex-col cursor-pointer ">
              {userInfo? (
                 <>
                 <MenuItem
                 onclick={loginModalOpen } 
                 label="My quotes"
                 />
                 <MenuItem
                 onclick={registerModalOpen}
                 label="Logout"
                 />
                 </>

              ):(
                <>
                <MenuItem
                onclick={loginModalOpen } 
                label="Login"
                />
                <MenuItem
                onclick={registerModalOpen}
                label="Register"
                />
                </>

              )}
                
                

                </div>
                </div>
            ) }
            
            
          
        
       

    </div>
  )
}

export default UserMenu