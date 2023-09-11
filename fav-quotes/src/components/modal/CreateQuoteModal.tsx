import Header from "../Header";
import Inputs from "../inputs/Inputs";
import Modal from "./Modal";

import {  useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


import { closeQuoteModal } from "../../slices/createQuoteModal";
import { useAppDispatch,useAppSelector } from "../../hooks/useAppHooks";
import {ZodType, z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "./RegisterModal";
import { useNewQuoteMutation } from "../../slices/quoteSlice";




 const CreateQuoteModal = () => {
    const [quoteCreate, {isLoading,isError}] = useNewQuoteMutation()
   
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const schema: ZodType<FormData> = z.object({
        
        text: z.string().min(6).max(300),
        author: z.string().min(2).max(40)
        
    })
    

  const {register, handleSubmit, formState:{errors}}= useForm<FormData>({resolver:zodResolver(schema)})
    

    const dispatch = useAppDispatch()

    

      const  handleOnClose = ()=>{
   dispatch(closeQuoteModal())
      }

      const isQuoteModalOpen = useAppSelector((state)=> state.toggleQuoteModal.isQuoteModalOpen)

      const onSubmit= async(quotes:FormData)=> {
      try {
     const quoteResponse = await quoteCreate(quotes).unwrap()

     setTimeout(()=>{
        toast.success("quote created succesfully")
     },4000)
   
   dispatch(closeQuoteModal())
    
      }
      catch(error){
        console.log(error)
      }

        }
    const bodyContent = (
        <div className=" flex flex-col gap-4">
    <Header
    title={`Hello ${userInfo?.name}`}
    subtitle=" Add your favorite quote"
    
    />
    <Inputs
    id= "author"
    label="Author"
    disabled={isLoading}
    register={register}
     required
    error={errors}

    />
    
    <Inputs
  id="text"
  label="Quote"
  disabled={isLoading}
  register={register}
  required
  error={errors}
isTextArea
/>

   
        </div>
    
      )
    
    
      return (
        <Modal
        disabled={isLoading}
        isOpen={isQuoteModalOpen}
        title="Add Quote"
        onClose={handleOnClose }
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={`${isLoading ? "loading" : "Add quote"}`}
        body={bodyContent}
        
        
    
        />
      )
      }    
 

export default CreateQuoteModal