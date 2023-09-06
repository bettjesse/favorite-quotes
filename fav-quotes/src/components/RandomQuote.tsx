import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useGetMyQuotesQuery } from "../slices/quoteSlice";

import { useAppDispatch,useAppSelector } from "../hooks/useAppHooks";
import { openLoginModal } from "../slices/loginModalSlice";
import { openQuoteModal } from "../slices/createQuoteModal";
import { Link } from "react-router-dom";
import "../App.css"


const RandomQuote = () => {
  const { data: myQuotes, isLoading, isError } = useGetMyQuotesQuery();
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const dispatch= useAppDispatch()
  const [randomQuote, setRandomQuote] = useState<{
    text: string;
    author: string;
  }>({
    text: "",
    author: "",
  });

  useEffect(() => {
    if (!isLoading && myQuotes && myQuotes.quotes && myQuotes.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * myQuotes.quotes.length);
      const quote = myQuotes.quotes[randomIndex];
      setRandomQuote(quote);
    } else {
      setRandomQuote({ text: "No favorite quotes yet.", author: "" });
    }
  }, [myQuotes, isLoading]);


  const loginModalOpen = ()=>{
    dispatch(openLoginModal())
  }
  const quoteModalOpen= ()=>{
    dispatch(openQuoteModal())
  }
  return (
    <div className="p-4 rounded-lg shadow-lg text-center">
      {isLoading ? (
        // Show the Spinner component while loading
        <div className="spinner"></div>
      ) : (
        <div className="rounded-lg bg-white p-4 mb-4">
          <FaQuoteRight size={64} className="text-gray-400 mb-2" />
          <blockquote className="text-4xl italic">
            {randomQuote.text} - {randomQuote.author}
          </blockquote>
          {/* Render content based on user info and quotes */}
          {userInfo ? (
            myQuotes && myQuotes.quotes && myQuotes.quotes.length === 0 ? (
              // Scenario 1: User is logged in but has no quotes
              <div className="mt-4">
                <p>You don't have any saved quotes yet.</p>
                <p>Discover inspiration and add your favorite quotes.</p>
                {/* You can add a CTA button to encourage quote creation */}
                <div className="md:mx-auto md:w-[45%]">
                <Button label="Add a Quote" onClick={quoteModalOpen} />
                </div>
              </div>
            ) : (
              // Scenario 2: User is logged in and has saved quotes
              <div className="mt-4 md:mx-auto  md:w-[25%]">
                 <Link to = "/myquotes">
                <Button label="My Quotes"  />
                </Link>
              </div>
            )
          ) : (
            // Scenario 3: User is not logged in
            <div className="mt-4">
              <p>Log in to view and save your favorite quotes.</p>
              {/* You can add a CTA button to encourage login */}
              <Button label="Log In" onClick={loginModalOpen } />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
