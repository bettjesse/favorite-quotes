import Header from "../Header";
import Inputs from "../inputs/Inputs";
import Modal from "./Modal";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { closeEditQuoteModal } from "../../slices/editQuoteModalSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppHooks";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "./RegisterModal";
import { useUpdateQuoteMutation } from "../../slices/quoteSlice";
import { useParams } from "react-router-dom";

const EditQuoteModal = () => {
  const [quoteUpdate, { isLoading, isError }] = useUpdateQuoteMutation();
  const id = useParams().id as string;

// Now 'id' is explicitly defined as a string, and TypeScript won't complain.

  
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const schema: ZodType<FormData> = z.object({
    text: z.string(),
    author: z.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(closeEditQuoteModal());
  };

  const isEditQuoteModalOpen = useAppSelector(
    (state) => state.toggleEditQuoteModal.isEditQuoteModalOpen
  );

  const onSubmit = async (quotes: FormData) => {
    try {
        
        // Create an object with id and data properties
        const updateData = {
            id,
            data: quotes
          };
    
        const updateResponse = await quoteUpdate(updateData).unwrap();
      setTimeout(() => {
        toast.success("quote created succesfully");
      }, 4000);

      dispatch(closeEditQuoteModal());
    } catch (error) {
      console.log(error);
    }
  };
  const bodyContent = (
    <div className=" flex flex-col gap-4">
      <Header subtitle="Edit your quote" />
      <Inputs
        id="author"
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
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isEditQuoteModalOpen}
      title="Edit Quote"
      onClose={handleOnClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={`${isLoading ? "loading" : "continue"}`}
      body={bodyContent}
    />
  );
};

export default EditQuoteModal;
