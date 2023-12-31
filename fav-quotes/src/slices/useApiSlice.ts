import { apiSlice } from "./apiSlice";
import { FormData } from "../components/modal/RegisterModal";

type RegistrationResponse = {
    email: string;
    name: string;
    authentication?: {
      password: string;
      salt: string;
    };
    _id?: string;
    __v?: number;
    // You might have additional fields that are not present in this example
  };
  
  type LoginResponse = {
    _id?: string;
    email: string;
    name: string;
    __v?: number;
  };
const useApiSlice= apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      register: builder.mutation<RegistrationResponse, FormData>({ 
        query: (data) => ({
          url: '/auth/register', 
          method: 'POST',
          body: data,
        }),
    
      }),
      login: builder.mutation<LoginResponse,FormData>({
       query: (data)=> ({
        url: '/auth/login', 
        method: 'POST',
        body: data,
        credentials: "include"
    
       })
      }),
      logout: builder.mutation<void, void>({ // Add the logout mutation
        query: () => ({
          url: '/auth/logout',
          method: 'POST', // You can adjust the method as needed
          credentials: 'include',
        }),
      }),
      getUser: builder.query <RegistrationResponse,void>({
       query: ()=> ({
        url: '/user', 
        method: 'GET',
       
        credentials: "include"
    
       })
      })
    }),
  });
  export  const {useRegisterMutation, useLoginMutation, useGetUserQuery, useLogoutMutation} = useApiSlice