import React from "react";
import { FaQuoteRight } from "react-icons/fa"; // Import the quote icon from Font Awesome
import Button from "./Button";

const RandomQuote = () => {
  // Sample quotes for demonstration
  const sampleQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Life is really simple, but we insist on making it complicated. - Confucius",
  ];

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
    return sampleQuotes[randomIndex];
  };

  const randomQuote = getRandomQuote();

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
      <div className="rounded-lg bg-white p-4 mb-4">
        <FaQuoteRight size={64} className="text-gray-400 mb-2" />
        <blockquote className="text-4xl italic">{randomQuote}</blockquote>
      </div>
      <p className="text-lg text-gray-600">
        Create an account to save your favorite quotes and view them anytime!
      </p>
      {/* You can add a signup button here when you implement authentication */}
    </div>
  );
};

export default RandomQuote;
