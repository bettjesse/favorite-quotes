import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetMyQuotesByIdQuery } from "../slices/quoteSlice";
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import { useAppDispatch,useAppSelector } from "../hooks/useAppHooks";
import { openEditQuoteModal,closeEditQuoteModal } from "../slices/editQuoteModalSlice";
import "../App.css";

const QuoteDetail = () => {
  const { id } = useParams();
  const [quoteId, setQuoteId] = useState(id); // Store the current quote ID in a state variable
  const { data: quote, isLoading, isError, error } = useGetMyQuotesByIdQuery(quoteId as string);

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (error) {
      console.error("Error loading quote details:", error);
    }
    // You can perform additional actions here if needed
  }, [quoteId, error]);

  if (id === '') {
    return <div>Error: Quote ID is missing.</div>; // Handle the case where ID is missing
  }

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (isError) {
    return <div>Error loading quote details.</div>;
  }

  const handleEditModalOpen = ()=> {

    dispatch(openEditQuoteModal())
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-rose-500">
    <Link to="/" className="text-2xl hover:underline mt-4 md:mt-6 block text-white">Back home</Link>
    <div className="rounded-md bg-white shadow-lg p-8 w-11/12 md:w-1/2 text-center mt-6">
      <h1 className="text-4xl mb-6 font-bold">Quote Details</h1>
      <p className="text-2xl mb-4 text-neutral-500">Quote: {quote?.text}</p>
      <p className="text-2xl mb-4 text-neutral-500">Author: {quote?.author}</p>
      <p className="text-2xl mb-4 text-neutral-500">Created At: {new Date(quote?.createdAt).toLocaleDateString()}</p>
      {/* Add edit and delete icons with some styling */}
      <div className="mt-6">
        <button
         className="text-green-500 hover:text-green-600 mr-6 text-xl"
         onClick={handleEditModalOpen}
         
         >
          <FiEdit size={24} /> Edit
        </button>
        <button className="text-rose-500 hover:text-red-600 text-xl">
          <FiTrash2 size={24} /> Delete
        </button>
      </div>
    </div>
  </div>
);
};


export default QuoteDetail;




// Development Challenge:
// Issue: While working on the project, I encountered a TypeScript error in the code related to the use of the useGetMyQuotesByIdQuery hook. The error message was:


// Argument of type 'string | undefined' is not assignable to parameter of type 'string | unique symbol'.
// Type 'undefined' is not assignable to type 'string | unique symbol'.ts(2345)
// This error was triggered when attempting to pass the id variable, which TypeScript inferred as a string | undefined, as an argument to a function that expected a string.

// Solution:
// Cause of the Error: The error occurred because TypeScript inferred the type of the id variable from the useParams hook as string | undefined. This inference was based on how the useParams hook is commonly used and its type definition.

// Resolution: To resolve the error, we applied an explicit type assertion to inform TypeScript that we were certain that id would always have a string value when passed to the useGetMyQuotesByIdQuery function. We achieved this by using the as string assertion:

// typescript
// Copy code
// const { id } = useParams<Id>();
// const { data: quote, isLoading, isError, error } = useGetMyQuotesByIdQuery(id as string);
// By using the as string assertion, i indicated to TypeScript that id should be treated as a string, even though it was initially inferred as string | undefined. This resolved the TypeScript error without altering the intended behavior of the code.