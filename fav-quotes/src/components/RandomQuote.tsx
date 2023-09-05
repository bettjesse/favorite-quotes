import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useGetMyQuotesQuery } from "../slices/quoteSlice";

const RandomQuote = () => {
  const { data: myQuotes, isLoading, isError } = useGetMyQuotesQuery();
  const [randomQuote, setRandomQuote] = useState<{ text: string; author: string }>({
    text: "",
    author: "",
  });

  useEffect(() => {
    if (!isLoading && myQuotes && myQuotes.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * myQuotes.quotes.length);
      const quote = myQuotes.quotes[randomIndex];
      setRandomQuote(quote);
    } else {
      setRandomQuote({ text: "No favorite quotes yet.", author: "" });
    }
  }, [myQuotes, isLoading]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
      <div className="rounded-lg bg-white p-4 mb-4">
        <FaQuoteRight size={64} className="text-gray-400 mb-2" />
        <blockquote className="text-4xl italic">
          {randomQuote.text} - {randomQuote.author}
        </blockquote>
      </div>
      <p className="text-lg text-gray-600">
        Create an account to save your favorite quotes and view them anytime!
      </p>
      {/* You can add a signup button here when you implement authentication */}
    </div>
  );
};

export default RandomQuote;
