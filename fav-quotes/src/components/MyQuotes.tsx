import { useGetMyQuotesQuery } from "../slices/quoteSlice";
import { FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css"

const MyQuotes = () => {
  const { data: myQuotes, isLoading, isError } = useGetMyQuotesQuery();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center my-3">My Quotes</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : isError ? (
        <p className="text-red-500">Error loading quotes.</p>
      ) : myQuotes && myQuotes.quotes.length > 0 ? (
      
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 ">
          {myQuotes.quotes.map((quote) => (
              <>
              
           <Link to = {`/quote/${quote._id}`}>
            <div
              key={quote._id}
              className="p-4 hover:bg-rose-500  rounded-lg shadow-lg text-center cursor-pointer"
            >
              <FaQuoteRight className= " hover:text-gray-100"
              />
              <p className="text-lg">{quote.text}</p>
              <p className="text-gray-600 mt-2">- {quote.author}</p>
            </div>
            </Link>
            </>
          ))}
        </div>
       
      ) : (
        <p className="mt-4">You don't have any saved quotes yet.</p>
      )}
    </div>
  );
};

export default MyQuotes;
