
import {useState} from "react"
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppHooks";
import { clearCredentials } from "../../slices/authSlice";
import { openRegisterModal } from "../../slices/registerModalSlice";
import { openLoginModal } from "../../slices/loginModalSlice";
import { useLogoutMutation } from "../../slices/useApiSlice";

import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState (false)
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector((state)=> state.auth.userInfo)
    const [logoutMutation,{ isError, isLoading  }] = useLogoutMutation()

    const toggleOpen = ()=>{
        setIsOpen((value)=>!value)
    }

    const registerModalOpen = ()=>{
        dispatch(openRegisterModal())
    }
    const loginModalOpen = ()=>{
        dispatch(openLoginModal())
    }


    const handleLogout = async()=> {
      try {
        await logoutMutation()
        dispatch(clearCredentials())
        toast.success("logout succesfully")

      } catch (error){
     toast.error("logout error" )
      }
 
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
                 <Link to= "/myquotes">
                 <MenuItem
                 onclick={()=>{} } 
                 label="My quotes"
                
                 />
                 </Link>
                 <MenuItem
                 onclick={handleLogout}
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