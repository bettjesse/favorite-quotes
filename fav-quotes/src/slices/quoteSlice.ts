import { apiSlice } from "./apiSlice";
import { FormData } from "../components/modal/RegisterModal";

// Define the Quote type
interface Quote {
  _id?: string;
  text: string;
  author: string;
  createdAt?: string;
 
}

// Define the QuoteResponse type
interface QuoteResponse {
  text: string;
  author: string;
  _id? : string
  
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
    getMyQuotesById: builder.query<Quote,  string>({
      query: (id) => ({
        url: `/quotes/${id}`,
        method: "GET",
        credentials: "include", 
      }),
    }),
    updateQuote: builder.mutation<Quote, {id: string, data:Quote}>({
      query: ({id,data}) => ({
        url: `/quotes/${id}`,
        method: "PUT",
        credentials: "include", 
        body: data
      }),
    }),
  }),
});

export const { useNewQuoteMutation, useGetMyQuotesQuery,useGetMyQuotesByIdQuery, useUpdateQuoteMutation } = quoteSlice;
