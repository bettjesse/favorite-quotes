import Header from "../Header";
import Inputs from "../inputs/Inputs";
import Modal from "./Modal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import { closeRegisterModal } from "../../slices/registerModalSlice";
import { useAppDispatch,useAppSelector } from "../../hooks/useAppHooks";

const RegisterModal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useAppDispatch()

    const { register, formState: { errors }} = useForm<FieldValues>({
        defaultValues: { name: "", email: "", password: "" },
      });

      const  handleOnClose = ()=>{
   dispatch(closeRegisterModal())
      }

      const handleSubmit = ()=>{
        setIsLoading(true)
      }
      const isRegisterModalOpen = useAppSelector((state)=> state.toggleRegisterModal.isRegisterModalOpen)
    const bodyContent = (
        <div className=" flex flex-col gap-4">
    <Header
    title=" Welcome to Nest Naivasha"
    subtitle=" Create an account"
    
    />
    <Inputs
    id= "email"
    label="Email"
    disabled={isLoading}

    error={errors}

    />
    <Inputs
    id= "name"
    label="Name"
    disabled={isLoading}
   
    error={errors}

    />
    <Inputs
    id= "password"
    type="password"
    label="Password"
    disabled={isLoading}
  
    error={errors}
    
    />
        </div>
    
      )
    
      const footerContent = (
        <div className= "flex flex-col gap-4 mt-3">
         <hr/>
         <Button
         outline
         label="continue with Google"
        //  icon={FcGoogle}
        //  onClick={()=>signIn("goggle")}
         />
         <div className="   text-neutral-500 text-center mt-4 font-light">
          <div className=" justify-center flex flex-row items-center gap-2">
            <div >Already have an account? </div>
            <div className= "hover:underline cursor-pointer text-neutral-800">Login</div>
          </div>
    
         </div>
    
        </div>
      )
      return (
        <Modal
        disabled={isLoading}
        isOpen={isRegisterModalOpen}
        title="Register"
        onClose={handleOnClose }
        onSubmit={handleSubmit}
        actionLabel={`${isLoading ? "loading" : "continue"}`}
        body={bodyContent}
        footer={footerContent}
    
        />
      )
      }    
 

export default RegisterModal