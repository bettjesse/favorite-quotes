import { apiSlice } from "./apiSlice";
import { FormData } from "../components/modal/RegisterModal";

// Define the Quote type
interface Quote {
  text: string;
  author: string;
 
}

// Define the QuoteResponse type
interface QuoteResponse {
  text: string;
  author: string;
  
}

 export interface MyQuotesreponse {
    message : string
    quotes: Quote[]
}

const quoteSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    newQuote: builder.mutation<QuoteResponse, FormData>({
      query: (data) => ({
        url: "/quote",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getMyQuotes: builder.query<MyQuotesreponse, void>({
      query: () => ({
        url: "/myquote",
        method: "GET",
        credentials: "include", 
      }),
    }),
  }),
});

export const { useNewQuoteMutation, useGetMyQuotesQuery } = quoteSlice;
