import Header from "../Header";
import Inputs from "../inputs/Inputs";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import {  useForm } from "react-hook-form";
import Button from "../Button";
import { closeRegisterModal } from "../../slices/registerModalSlice";
import { openLoginModal } from "../../slices/loginModalSlice";
import { useAppDispatch,useAppSelector } from "../../hooks/useAppHooks";
import {ZodType, z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../../slices/useApiSlice";

export interface FormData {
    name?: string;
    email?: string;
    password?: string;
    text?: string;
    author?:string;
  }

 const RegisterModal = () => {
   
  const [registerUser, { isLoading, isError,  }] = useRegisterMutation();
      
    const schema: ZodType<FormData> = z.object({
        name : z.string().min(2).max(30),
        email: z.string().email(),
        password: z.string().min(6).max(40)

    })
    

  const {register, handleSubmit, formState:{errors}}= useForm<FormData>({resolver:zodResolver(schema)})
    

    const dispatch = useAppDispatch()

    // const { register, formState: { errors }} = useForm<FieldValues>({
    //     defaultValues: { name: "", email: "", password: "" },
    //   });

      const  handleOnClose = ()=>{
   dispatch(closeRegisterModal())
      }

    //   const handleSubmit = ()=>{
    //     setIsLoading(true)
    //   }
      const isRegisterModalOpen = useAppSelector((state)=> state.toggleRegisterModal.isRegisterModalOpen)

      const onSubmit= async(user:FormData)=> {
        try {
          const res = await registerUser(user).unwrap();
          dispatch(closeRegisterModal())

          setTimeout(()=>{
            toast.success("registered succesfuly login to continue", {
              duration: 3000, 
            });
          },6000)
        
         
          dispatch(openLoginModal())

          
        }
        catch(err){
          console.log("err",err)
          console.log("isError" ,isError)

        }
    
        }
    const bodyContent = (
        <div className=" flex flex-col gap-4">
    <Header
    title=" Welcome to Quotecube"
    subtitle=" Create an account"
    
    />
    <Inputs
    id= "email"
    label="Email"
    disabled={isLoading}
    register={register}
     required
    error={errors}

    />
    <Inputs
    id= "name"
    label="Name"
    disabled={isLoading}
   register={register}
   required
    error={errors}

    />
    <Inputs
    id= "password"
    type="password"
    label="Password"
    disabled={isLoading}
    register={register}
    required
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
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={`${isLoading ? "loading" : "continue"}`}
        body={bodyContent}
        footer={footerContent}
    
        />
      )
      }    
 

export default RegisterModal