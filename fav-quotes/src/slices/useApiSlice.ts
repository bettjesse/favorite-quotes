import { apiSlice } from "./apiSlice";
import { FormData } from "../components/modal/RegisterModal";

type RegistrationResponse = {
    email: string;
    name: string;
    authentication: {
      password: string;
      salt: string;
    };
    _id: string;
    __v: number;
    // You might have additional fields that are not present in this example
  };
  

const useApiSlice= apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      register: builder.mutation<RegistrationResponse, FormData>({ // Use FormData as the RegistrationData type
        query: (data) => ({
          url: '/auth/register', // Replace with the actual endpoint URL
          method: 'POST',
          body: data,
        }),
        // Define types for RegistrationResponse and RegistrationData
        // RegistrationResponse should represent the response structure
        // RegistrationData should represent the data you're sending in the request
      }),
    }),
  });
  export  const {useRegisterMutation} = useApiSlice