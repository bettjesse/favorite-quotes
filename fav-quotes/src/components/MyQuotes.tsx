import { useGetMyQuotesQuery } from "../slices/quoteSlice";

import "../App.css"

const MyQuotes = () => {
  const { data: myQuotes, isLoading, isError } = useGetMyQuotesQuery();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Quotes</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : isError ? (
        <p className="text-red-500">Error loading quotes.</p>
      ) : myQuotes && myQuotes.quotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myQuotes.quotes.map((quote) => (
            <div
              key={quote._id}
              className="p-4 bg-white rounded-lg shadow-lg text-center"
            >
              <p className="text-lg">{quote.text}</p>
              <p className="text-gray-600 mt-2">- {quote.author}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4">You don't have any saved quotes yet.</p>
      )}
    </div>
  );
};

export default MyQuotes;
